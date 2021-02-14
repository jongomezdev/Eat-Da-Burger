const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Create all routes and set up logic.

router.get("/", (req, res) => {
  burger.all((err, data) => {
    if (err) return res.status(500).end();
    const devoured = data.filter((burger) => burger.devoured);
    hbsObject = {
      burgers: data,
      devoured: devoured.length,
    };
    res.render("index", hbsObject);
  });
});
