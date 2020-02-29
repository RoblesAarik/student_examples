const express = require("express");

const app = express();

// Middleware
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/logs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const Logs = require("./models/logs.js");

// Index Route
app.get("/logs", (req, res) => {
  Logs.find({}, (error, logs) => {
    res.render("index.ejs", { logs });
  });
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

// Seed Route
app.get("/logs/seed", (req, res) => {
  Logs.create(
    [
      {
        title: "Hole in the hull",
        entry: "Patched up a small hole",
        shipIsBroken: false,
      },
      {
        title: "Missles won't fire",
        entry: "Ship ran out of missles. Bought more.",
        shipIsBroken: false,
      },
      {
        title: "Fought alien life forms",
        entry: "Ship was destroyed in the fight",
        shipIsBroken: true,
      },
    ],
    (err, data) => {
      console.log(data);
      res.redirect("/logs");
    }
  );
});

app.listen(3000, () => {
  console.log("listening");
});
