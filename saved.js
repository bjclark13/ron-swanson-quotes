const express = require("express");
const routes = express.Router();
const pool = require("./connection");

// localhost:3000?name=BJ
routes.get("/", (req, res) => {
  pool.query("SELECT * FROM quotes").then((results) => {
    res.json(results.rows);
  });
});

// accept POST request at URI: /routes
routes.post("/", (req, res) => {
  // Get item from body
  const newQuote = req.body;

  pool
    .query("INSERT INTO quotes(quote) VALUES($1)", [newQuote.quote])
    .then((results) => {
      pool.query("SELECT * FROM quotes").then((results) => {
        res.status(201); // return 201 status code

        res.json(results.rows);
      });
    });
});

// accept DELETE request at URI: /routes
routes.delete("/:id", (req, res) => {
  // use this id as a way of finding your
  // item
  pool.query("DELETE FROM quotes WHERE id=$1", [req.params.id]).then(() => {
    res.status(204);
    res.json("Deleted");
  });
});

// export module so it's usable in other files
module.exports = routes;
