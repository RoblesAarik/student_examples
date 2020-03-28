const mongoose = require("mongoose");

// New Fruit schema
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

// Attach to fruit model
const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
