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
  password: ""
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(port, () => {
  console.log("server has been started in port " + port);
});
