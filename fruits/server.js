const express = require("express");

const app = express();

const port = 3000;

const methodOverride = require("method-override");

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

app.use(methodOverride("_method"));

app.get("/fruits", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("index.ejs", {
    fruit: fruits,
  });
});

app.get("/fruits/new", (req, res) => {
  res.render("new.ejs");
});

app.get("/fruits/:indexOfFruitsArray/edit", (req, res) => {
  res.render("edit.ejs", {
    fruit: fruits[req.params.indexOfFruitsArray],
    id: req.params.indexOfFruitsArray,
  });
});

app.get("/fruits/:indexOfFruitsArray", (req, res) => {
  // res.send(fruits[req.params.indexOfFruitsArray]);
  res.render("show.ejs", {
    fruit: fruits[req.params.indexOfFruitsArray],
    id: req.params.indexOfFruitsArray,
  });
});

// Update
app.put("/fruits/:indexOfFruitsArray", (req, res) => {
  //:indexOfFruitsArray is the index of our fruits array that we want to change
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true;
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false;
  }
  fruits[req.params.indexOfFruitsArray] = req.body; //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
  res.redirect("/fruits"); //redirect to the index page
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

// Delete
app.delete("/fruits/:indexOfFruitsArray", (req, res) => {
  // code that deletes a fruit
  // remove the item from the array
  fruits.splice(req.params.indexOfFruitsArray, 1);
  // redirect back to the index page
  res.redirect("/fruits");
});

// Root Route
app.get("/", (req, res) => {
  res.redirect("/fruits");
});

app.listen(port, () => {
  console.log("listening on port", port);
});
