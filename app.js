import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/person/:id", (req, res) => {
  res.send(`<html><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get("/api", (req, res) => {
  res.json({
    firstname: "John",
    lastname: "Doe",
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
