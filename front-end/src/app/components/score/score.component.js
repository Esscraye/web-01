import { parseUrl } from "../../scripts/utils.js";
import template from "./score.component.html";
import { Component } from "../../scripts/component.js";
import "./score.component.scss";

const environment = {
  api: {
    host: "http://localhost:8081",
  },
};
export class ScoreComponent extends Component {
  constructor() {
    super(template);
    const params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
    this.scores = [];
  };

  async init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;

    this.scores = await fetch(`${environment.api.host}/scores`, {
      method: "GET",
    }).then((response) => response.json());

    this.populateSizeFilter();
    this.renderScores(this.scores);

    const sizeSelect = document.getElementById("size-select");
    sizeSelect.addEventListener('change', () => this.filterScores());
  };

  populateSizeFilter() {
    const sizeSelect = document.getElementById("size-select");
    const uniqueSizes = [...new Set(this.scores.map(score => score.size))];
    uniqueSizes.sort((a, b) => a - b);
  
    uniqueSizes.forEach(size => {
      const option = document.createElement("option");
      option.value = size;
      option.text = size;
      sizeSelect.appendChild(option);
    });
  };

  filterScores() {
    const sizeFilter = document.getElementById("size-select").value;
    let filteredScores;
    if (sizeFilter !== "-1") {
      filteredScores = this.scores.filter(score => score.size === parseInt(sizeFilter));
    } else {
      filteredScores = this.scores;
    }
    this.renderScores(filteredScores);
  };

  renderScores(scoreList) {
    const scores = scoreList
      .sort((a, b) => {
        if (a.size !== b.size) {
          return b.size - a.size;
        } else {
          return a.time - b.time;
        }
      })
      .slice(0, 10);
  
    const scoresTableBody = document.querySelector("tbody");
    scoresTableBody.innerHTML = "";
  
    scores.forEach((score) => {
      const tr = document.createElement("tr");
  
      const nameTd = document.createElement("td");
      nameTd.innerText = score.name;
      tr.appendChild(nameTd);
  
      const sizeTd = document.createElement("td");
      sizeTd.innerText = score.size;
      tr.appendChild(sizeTd);
  
      const timeTd = document.createElement("td");
      timeTd.innerText = score.time;
      tr.appendChild(timeTd);
  
      scoresTableBody.appendChild(tr);
    });
  };
}
