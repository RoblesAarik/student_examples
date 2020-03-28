const express = require("express");

const app = express();

const methodOverride = require("method-override");

// Middleware
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

// Connect mongoose to mongo db:
mongoose.connect("mongodb://localhost:27017/logs", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

const logController = require("./controllers/logs_controller.js");

app.use("/logs", logController);

app.listen(3000, () => {
  console.log("listening");
});
