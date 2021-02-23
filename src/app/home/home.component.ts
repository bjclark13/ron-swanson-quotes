import { Component, OnInit } from "@angular/core";
import { Quote } from "../quote";
import {RonSwansonService} from '../ron-swanson.service';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  randomQuote: string =
    "TODO: Replace me with a quote from http://ron-swanson-quotes.herokuapp.com/v2/quotes";

  constructor( private service: RonSwansonService) {}

  ngOnInit() {}

  saveQuote() {
    this.service.saveQuote(this.randomQuote);
  }
}
