import { parseUrl } from "./utils.js";
import template from "../views/score.html";
import { Component } from "./component.js";
  /* class ScoreComponent constructor */
  export class ScoreComponent extends Component {
    constructor() {
    super(template);
    var params = parseUrl();
    this.template = template;
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  };

  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
}

  // put component in global scope, to be runnable right from the HTML.

  /* method ScoreComponent.init */
