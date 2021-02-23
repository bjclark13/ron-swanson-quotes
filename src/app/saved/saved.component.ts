import { Quote } from "../quote";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.css"],
})
export class SavedComponent implements OnInit {
  quotes: Quote[] = [
    { id: 1, quote: "Todo: " },
    { id: 2, quote: "Replace" },
    { id: 3, quote: "with" },
    { id: 4, quote: "API call." },
  ];
  constructor() {}

  ngOnInit() {}
}
