const express = require("express");
const urlencodedParser = express.urlencoded();

module.exports = function (app) {
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
};
