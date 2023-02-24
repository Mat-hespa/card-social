import { Component, getNgModuleById } from "@angular/core";
import {
  trigger,

} from "@angular/animations";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  animations: [trigger],
})

export class CardComponent {
  cards = document.querySelectorAll(".ts-card");
  menu = document.querySelectorAll(".ts-menu");
  menuToggles = document.querySelectorAll(".js-section-toggle");

  


  constructor() {}

}
