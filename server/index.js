const express = require("express");
const app = express();
const mysql = require("mysql");
const port = 5000;

app.get("/", (req, res) => {
  res.json("Hello");
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  con.query(
    "CREATE TABLE Users (firstName VARCHAR(255), lastName VARCHAR(255), emailAdd VARCHAR(255), contactNo VARCHAR(255), clubOrCounty VARCHAR(255))",
    function (err, result) {
      if (err) {
        throw err;
      }
      console.log("Table created.");
    }
  );
});

app.listen(port, () => {
  console.log("server has been started in port " + port);
});
