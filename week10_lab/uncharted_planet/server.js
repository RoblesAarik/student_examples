// Server set up
const express = require("express");

const app = express();

const port = 3000;

const scientists = require("./models/scientists.js");

// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

// Created new route
app.get("/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/index", (req, res) => {
  res.render("index.ejs", {
    scientists: scientists,
  });
});

app.post("/index", (req, res) => {
  let scientist = {};
  scientist.name = req.body.name;
  scientist.description = req.body.description;
  scientists.push(scientist);
  console.log("scientist", scientists);
  res.redirect("/index");
});

app.listen(port, () => {
  console.log("listening");
});
