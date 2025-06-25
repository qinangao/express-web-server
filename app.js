const express = require("express");

const app = express();

//body parser
const urlencodedParser = express.urlencoded();
const jsonParser = express.json();

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log(`Request url:${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:id", (req, res) => {
  res.render("person", { ID: req.params.id, Qstr: req.query.qstr });
});

app.post("/person", urlencodedParser, (req, res) => {
  res.send("Thank you");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post("/personjson", jsonParser, (req, res) => {
  res.send("Thank you for the JSON data");
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

//RESTful api
app.get("/api/person/:id", (req, res) => {
  //get the data from database
  res.json({
    firstname: "John",
    lastname: "Doe",
  });
});

app.post("/api/person", jsonParser, (req, res) => {
  //save to the database
});
app.delete("/api/person/:id", (res, req) => {
  //delete from database
});

const port = process.env.PORT || 3000;
app.listen(port);
