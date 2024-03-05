import { Router } from "./app/scripts/router.js";
import { WelcomeComponent } from "./app/components/welcome/welcome.component.js";
import { GameComponent } from "./app/components/game/game.component.js";
import { ScoreComponent } from "./app/components/score/score.component.js";
import { NavbarComponent } from "./app/components/navbar/navbar.component.js";
import { FooterComponent } from "./app/components/footer/footer.component.js";

import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./app/styles/style.css";

customElements.define("my-navbar", NavbarComponent);
customElements.define("my-footer", FooterComponent);

const outlet = document.querySelector("#content-outlet");
const router = new Router(outlet);
router
  .register("", {
    component: WelcomeComponent,
  })
  .register("welcome", {
    component: WelcomeComponent,
  })
  .register("game", {
    component: GameComponent,
  })
  .register("score", {
    component: ScoreComponent,
  });
