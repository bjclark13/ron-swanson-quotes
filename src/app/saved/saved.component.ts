import { Quote } from "../quote";
import { Component, OnInit } from "@angular/core";
import { RonSwansonService } from "../ron-swanson.service";

@Component({
  selector: "app-saved",
  templateUrl: "./saved.component.html",
  styleUrls: ["./saved.component.css"],
})
export class SavedComponent implements OnInit {
  quotes: Quote[] = [];
  constructor(public service: RonSwansonService) {}

  ngOnInit() {}

  deleteQuote(id: number) {
    console.log(id);
    this.service.deleteQuote(id);
  }
}
