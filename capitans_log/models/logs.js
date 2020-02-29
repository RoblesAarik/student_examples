const mongoose = require("mongoose");

// New Schema
const logSchema = new mongoose.Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: { type: Boolean, default: true },
  },
  { timestamp: true }
);

// Attach model
const Logs = mongoose.model("Log", logSchema);

module.exports = Logs;
