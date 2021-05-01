const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello");
});

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

app.post("/register", (req, res) => {
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const emailid = req.body.email;
  const contactno = req.body.contactNo;
  const cluborcountry = req.body.clubOrCountry;

  con.query(
    "INSERT INTO users (firstName,lastName,emailAdd,contactNo,clubOrCounty) VALUES (?,?,?,?,?)",
    [firstname, lastname, emailid, contactno, cluborcountry]
  );
});

app.listen(port, () => {
  console.log("server has been started in port " + port);
});
