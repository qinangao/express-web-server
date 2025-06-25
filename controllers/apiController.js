const express = require("express");
const jsonParser = express.json();

module.exports = function (app) {
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
};
