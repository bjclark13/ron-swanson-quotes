const express = require('express');

const app = express();

// Allows you to use path params, body, and
// query string parameters
app.use(express.json());

app.use(cors());

const port = 3000

// Import routes file, this is where
// the API logic will go
const routes = require('./saved.js');


// the routes module will serve
// the API from /my-routes
app.use('/api/quotes', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});