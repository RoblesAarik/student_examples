const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

// Index Route
app.get("/logs", (req, res) => {
  res.render("index.ejs");
});

// NEW ROUTE
app.get("/logs/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  res.redirect("/logs/:id");
});

app.listen(3000, () => {
  console.log("listening");
});
