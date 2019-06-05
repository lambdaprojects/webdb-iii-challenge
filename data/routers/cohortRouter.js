const express = require("express");
const router = express.Router();
const cohortHelper = require("../helpers/cohortHelper");

router.get("/", async (req, res) => {
  try {
    const cohorts = await cohortHelper.find();
    res.status(201).json(cohorts);
  } catch (error) {
    console.log(":::: ERROR ::::");
    res.status(500).json({
      ErrorMessage: "There was an error while retrieving all the cohorts"
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cohort = await cohortHelper.findById(req.params.id);
    res.status(201).json(cohort);
  } catch (error) {
    console.log(`:: ERROR :: ${error}`);
    res.status(500).json(error);
  }
});

module.exports = router;
