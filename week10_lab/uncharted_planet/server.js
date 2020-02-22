// Server set up
const express = require("express");

const app = express();

const port = 3000;

const scientists = require("./models/scientists.js");

const methodOverride = require("method-override");
// Middleware
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// load body parser middleware
app.use(express.urlencoded({ extended: false }));

// load methodOverride middleware
app.use(methodOverride("_method"));

// New route
app.get("/planet/new", (req, res) => {
  res.render("new.ejs");
});

// index
app.get("/planet", (req, res) => {
  res.render("index.ejs", {
    scientists: scientists,
  });
});

// show
app.get("/planet/:id", (req, res) => {
  res.render("show.ejs", {
    scientists: scientists[req.params.id],
  });
});

// create
app.post("/planet", (req, res) => {
  let scientist = {};
  scientist.name = req.body.name;
  scientist.description = req.body.description;
  scientists.push(scientist);
  console.log("scientist", scientists);
  res.redirect("/planet");
});

// delete
app.delete("/planet/:id", (req, res) => {
  scientists.splice(req.params.id, 1);
  res.redirect("/planet");
});

app.listen(port, () => {
  console.log("listening");
});
