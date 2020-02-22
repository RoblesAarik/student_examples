// =======================================
//              DEPENDENCIES
// =======================================
const express = require("express");
const app = express();
const port = 3000;

// =======================================
//              DATABASE
// =======================================
const bakedGoods = require("./models/bakedgoods.js");

// =======================================
//              ROUTES
// =======================================
// MiddleWare
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});
app.use(express.urlencoded({ extended: false }));

// index route
app.get("/bakedgoods", (req, res) => {
  res.render("index.ejs", {
    bakedGoods: bakedGoods,
  });
});

// Create new goods route
app.get("/bakedgoods/new", (req, res) => {
  res.render("new.ejs");
});

// show route
app.get("/bakedgoods/:id", (req, res) => {
  res.render("show.ejs", {
    bakedGoods: bakedGoods[req.params.id],
  });
});

app.post("/bakedgoods", (req, res) => {});

// =======================================
//              LISTENER
// =======================================
app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`);
});
