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

router.post("/", async (req, res) => {
  try {
    const student = await cohortHelper.create(req.body);
    res.status(201).json({ Message: "Cohort created successfully" });
  } catch (error) {
    console.log(`:: ERROR :: ${error}`);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const student = await cohortHelper.update(req.params.id, req.body);
    res.status(201).json({
      Message: `Cohort with id ${req.params.id} updated successfully`
    });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await cohortHelper.remove(req.params.id);
    res
      .status(201)
      .json({
        Message: `Cohort with id ${
          req.params.id
        } has been deleted successfully.`
      });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

module.exports = router;
