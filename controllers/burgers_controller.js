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
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create();
});

router.patch("/api/burger/:id", (req, res) => {
  burger.update();
});

router.delete("/api/burgers", (req, res) => {
  burger.delete();
});

module.exports = router;
