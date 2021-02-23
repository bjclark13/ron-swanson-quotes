const express = require("express");
const routes = express.Router();

// TODO: for database stuff
// don't forget to fill in your password
const pool = require('./connection');

// logic for our endpoints
const savedQuotes = [];

// localhost:3000?name=BJ
routes.get("/", (req, res) => {
  res.json(savedQuotes);
});

// accept POST request at URI: /routes
routes.post("/", (req, res) => {
  // Get item from body
  const newQuote = req.body;

  // Add to array
  savedQuotes.push({ quote: newQuote.quote, id: savedQuotes.length + 1 });

  res.status(201); // return 201 status code
  res.json(savedQuotes); // return changed list
});

// accept DELETE request at URI: /routes
routes.delete("/:id", (req, res) => {
  // use this id as a way of finding your
  // item
  const index = savedQuotes.findIndex((quote) => {
    return quote.id === req.params.id;
  });

  savedQuotes.splice(index, 1);
  res.status(204);
  res.json("Deleted");
});

// export module so it's usable in other files
module.exports = routes;
