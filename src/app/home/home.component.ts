import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  randomQuote: Quote = {
    id: 0,
    quote:
      "TODO: Replace me with a quote from http://ron-swanson-quotes.herokuapp.com/v2/quotes",
  };
  constructor() {}

  ngOnInit() {}
}
