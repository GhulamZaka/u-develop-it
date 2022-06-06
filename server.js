const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql2");
require("dotenv").config();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
// const db = mysql.createConnection(
// const database = "inventory_DB"; // Database name
// const dbConn = {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: "election",
// };
// console.log("Connected to the election database.");

// Connect to database
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "election",
  },
  console.log("Connected to the election database.")
);

////////////////////////////////////

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});
///////////////////////////////////
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
