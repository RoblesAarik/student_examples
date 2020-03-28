const express = require("express");
const router = express.Router();
const Logs = require("../models/logs.js");
module.exports = router;

// Index Route
router.get("/", (req, res) => {
  Logs.find({}, (error, logs) => {
    res.render("index.ejs", { logs });
  });
});

// NEW ROUTE
router.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route
router.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  res.redirect("/logs/:id");
});

// Seed Route
router.get("/seed", (req, res) => {
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

// Show Route
router.get("/:id", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
    res.render("show.ejs", {
      logs: foundLog,
    });
  });
});

// Delete route
router.delete("/:id", (req, res) => {
  Logs.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

// Edit route
router.get("/:id/edit", (req, res) => {
  // Finds the log you're updating
  Logs.findById(req.params.id, (err, foundLogs) => {
    res.render("edit.ejs", {
      // updates the new data to previous data
      logs: foundLogs,
    });
  });
});

// Updated Route
router.put("/:id/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updateModel) => {
      res.redirect("/logs");
    }
  );
});
