const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "MY_PASSWORD_HERE",
  host: "localhost",
  port: 5432,
  database: "swanson",
  ssl: false
});

module.exports = credentials;