const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RouteSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Route", RouteSchema);
