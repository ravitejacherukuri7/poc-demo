const express = require("express");
const router = express.Router();

// Post models
const Route = require("../../models/Route");

//Rest API
//Get
router.get("/", async (req, res) => {
  try {
    const route = await Route.find({}, { description: 1, _id: 1 }).sort({
      description: 1,
    });

    if (!route) throw Error("Error find route");
    res.status(200).json(route);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
//Post
router.post("/", async (req, res) => {
  const newRoute = new Route(req.body);
  try {
    const route = await newRoute.save();
    if (!route) throw Error("Error saving route");

    res.status(200).json(route);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
