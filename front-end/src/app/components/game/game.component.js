import { parseUrl } from "../../scripts/utils.js";
import template from "./game.component.html";
import { Component } from "../../scripts/component.js";
import { CardComponent } from "./card/card.component.js";
import "./game.component.css";

const environment = {
  api: {
    host: "http://localhost:8081",
  },
};

/* class GameComponent constructor */
export class GameComponent extends Component {
  constructor() {
    // gather parameters from URL
    super(template);
    const params = parseUrl();

    // save player name & game ize
    this._name = params.name;
    this._size = parseInt(params.size) || 9;
    this._flippedCard = null;
    this._matchedPairs = 0;
  }

  async init() {
    // fetch the cards configuration from the server
    this._config = await this.fetchConfig();
    this._boardElement = document.querySelector(".cards");
        // create cards out of the config
        this._cards = this._config.ids.map(id => new CardComponent(id));
  
        this._cards.forEach(card => {
          this._boardElement.appendChild(card.getElement());

          card.getElement().addEventListener(
            "click",
            () => {
              this._flipCard(card);
            }
          );
        });
  
        this.start();
      };


  start() {
    this._startTime = Date.now();
    let seconds = 0;
    document.querySelector("nav .navbar-title").textContent =
      `Player: ${this._name}. Elapsed time: ${seconds++}`;
  
    this._timer = setInterval(() => {
      document.querySelector("nav .navbar-title").textContent =
        `Player: ${this._name}. Elapsed time: ${seconds++}`;
    }, 1000);
  };

  async fetchConfig() {
    try {
      const response = await fetch(`${environment.api.host}/board?size=${this._size}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        return response.json();
      }
    } catch (error) {
      console.error(`Fetch Error: ${error}`);
    }
  }

  goToScore() {
    const timeElapsedInSeconds = Math.floor(
      (Date.now() - this._startTime) / 1000
    );
    clearInterval(this._timer);
  
    setTimeout(() => {
      const scorePage = "./#score";
      window.location =
        `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
    }, 750);
  };

  _flipCard(card) {
    if (this._busy) {
      return;
    }
  
    if (card.flipped) {
      return;
    }
  
    // flip the card
    card.flip();
  
    // if flipped first card of the pair
    if (!this._flippedCard) {
      // keep this card flipped and wait for the second card of the pair
      this._flippedCard = card;
    } else {
      // second card of the pair flipped...
  
      // if cards are the same
      if (card.equals(this._flippedCard)) {
        this._flippedCard.matched = true;
        card.matched = true;
        this._matchedPairs += 1;
  
        // reset flipped card for the next turn.
        this._flippedCard = null;
  
        if (this._matchedPairs === this._size) {
          this.goToScore();
        }
      } else {
        this._busy = true;
  
        // cards did not match
        // wait a short amount of time before hiding both cards
        setTimeout(() => {
          // hide the cards
          this._flippedCard.flip();
          card.flip();
          this._busy = false;

          // reset flipped card for the next turn.
          this._flippedCard = null;
        }, 500);
      }
    }
  };
}