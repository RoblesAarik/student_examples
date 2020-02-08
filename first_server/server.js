const express = require("express");

const app = express();

app.post("/", (req, res) => {
  res.send("Welcome to the root index page");
});

app.get("/secret", (req, res) => {
  res.send("You found the secret URL!!! OOOOooooo");
});

app.get("/somedata", (req, res) => {
  res.send("here is your informantion");
});
app.listen(3000, () => {
  console.log("I am listening for requests!!!");
});
