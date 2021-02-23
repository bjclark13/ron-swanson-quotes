import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class RonSwansonService {
  // import http client here
  constructor() {}

  getRandomQuote(): string {
    // use http client
    // to request Ron Swanson Quote from
    // http://ron-swanson-quotes.herokuapp.com/v2/quotes
    return "";
  }

  getSavedQuotes(): string[] {
    // use http client
    // to get saved quotes from
    // your express API
    // aka
    // http://localhost:3000/api/quotes
    return [];
  }
}
