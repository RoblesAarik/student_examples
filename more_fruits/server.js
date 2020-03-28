const express = require("express");
const app = express();
// Load up mongoose npm as mongoose:
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/fruitsdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});
const Fruit = require("./models/fruits.js");
// Routes:
// NEW
app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});
// CREATE
app.post("/fruits/", (req, res) => {
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, result) => {
    // res.send(result);
    res.redirect("/fruits");
  });
});
// INDEX
app.get("/fruits", (req, res) => {
  Fruit.find({}, (error, fruits) => {
    // res.send(fruits);
    res.render("index.ejs", { fruits });
  });
});
// SECRET SEED ROUTE
app.get("/fruits/seed", (req, res) => {
  Fruit.create(
    [
      {
        name: "grapefruit",
        color: "pink",
        readyToEat: true,
      },
      {
        name: "grape",
        color: "purple",
        readyToEat: false,
      },
      {
        name: "avocado",
        color: "green",
        readyToEat: true,
      },
    ],
    (error, data) => {
      console.log(data);
      res.redirect("/fruits");
    }
  );
});
// show route
app.get("/fruits/:id", (req, res) => {
  Fruit.findById(req.params.id, (err, foundFruit) => {
    res.render("show.ejs", {
      fruit: foundFruit,
    });
  });
});

// Web server:
app.listen(3000, () => {
  console.log("listening");
});
