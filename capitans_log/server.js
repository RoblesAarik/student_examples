const express = require("express");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

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
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("listening");
});
