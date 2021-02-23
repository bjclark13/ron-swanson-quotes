import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Quote } from "./quote";

@Injectable({
  providedIn: "root",
})
export class RonSwansonService {
  // import http client here
  constructor(private http: HttpClient) {}

  quotes: Quote[] = [
    { id: 0, quote: "Todo: " },
    { id: 1, quote: "Replace" },
    { id: 2, quote: "with" },
    { id: 3, quote: "API call." },
  ];

  getRandomQuote() {
    // use http client
    // to request Ron Swanson Quote from
    // http://ron-swanson-quotes.herokuapp.com/v2/quotes
    return this.http.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes');
  }

  // TODO 
  // Replace this with a GET call to your API
  getSavedQuotes(): string[] {
    // use http client
    // to get saved quotes from
    // your express API
    // aka
    // http://localhost:3000/api/quotes
    return [];
  }

  // TODO
  // Repalce this with a POST call to your api
  saveQuote(quote: string) {
    this.quotes.push({ quote, id: this.quotes.length });
  }

  // TODO: 
  // Replace this with a DELETE call to your api
  deleteQuote(id: number) {

    const index = this.quotes.findIndex( (quote) => {
      console.log(quote.id)
      return quote.id == id;
    });

    this.quotes.splice(index, 1);
  }
}
