const express = require("express");

const app = express();

const port = 3000;

const fruits = require("./models/fruits.js");

/*
Create = Post
Read = Get
Update = Put
Delete = Delete

request goes in 
  in between you might want/need to do something
  you use MIDDLEWARE to do that
response comes out,
*/

// Middleware should be placed at the top or your server
app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

// without this middleware code is undefined
// with it, it adds data to the key and
// and sends to the body
app.use(express.urlencoded({ extended: false }));

// app.get("/fruits/", (req, res) => {
//   res.send(fruits);
// });

app.get("/fruits", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("index.ejs", {
    fruit: fruits,
  });
});

app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("show.ejs", {
    fruit: fruits[req.params.indexOfFruitsArray],
  });
});

// Without this route we get a Cannot POST error
app.post("/fruits", (req, res) => {
  console.log(req.body);
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  let fruit = {};
  fruit.name = req.body.name;
  fruit.color = req.body.color;
  fruit.readyToEat = req.body.readyToEat;
  fruits.push(fruit);
  console.log("fruits", fruits);
  res.redirect("/fruits");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
