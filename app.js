const express = require("express");
const app = express();

const apiController = require("./controllers/apiController");
const htmlController = require("./controllers/htmlController");

app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.use("/", (req, res, next) => {
  console.log(`Request url:${req.url}`);
  next();
});

htmlController(app);
apiController(app);

const port = process.env.PORT || 3000;
app.listen(port);
