const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

// Create all routes and set up logic.

router.get("/", (req, res) => {
  burger.all((err, data) => {
    if (err) return res.status(500).end();
    console.table(data);
    const devoured = data.filter((burger) => burger.devoured);
    hbsObject = {
      burgers: data,
      devoured: devoured.length,
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create(req.body.burger_name, (err, data) => {
    if (err) return res.status(500).end();
    console.table(data);
    res.status(201).end();
  });
});

router.patch("/api/burgers/:id", (req, res) => {
  burger.update(req.params.id, (err, data) => {
    if (err) return res.status(500).end();
    console.table(data);
    res.status(200).end();
  });
});

router.delete("/api/burgers", (req, res) => {
  burger.delete((err, data) => {
    if (err) return res.status(500).end();
    console.table(data);
    res.status(200).end();
  });
});

module.exports = router;
