const express = require("express");

const app = express();

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
  res.render("person", { ID: req.params.id });
});

app.get("/api", (req, res) => {
  res.json({
    firstname: "John",
    lastname: "Doe",
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
