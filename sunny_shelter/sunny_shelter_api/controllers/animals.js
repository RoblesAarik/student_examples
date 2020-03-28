const express = require("express");
const router = express.Router();
const Animal = require("../models/animal.js");

// Index
router.get("/", (req, res) => {
  res.send("index");
});

// Create
router.post("/", (req, res) => {
  Animal.create(req.body, (error, createAnimal) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).json(createAnimal);
  });
});

// Delete
router.delete("/:id", (req, res) => {
  Animal.findByIdAndDelete(req.params.id, (err, deletedAnimal) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(deletedHoliday);
  });
});

// Update
router.put("/:id", (req, res) => {
  Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
});

module.exports = router;
