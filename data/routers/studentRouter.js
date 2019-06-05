const express = require("express");
const router = express.Router();
const studentHelper = require("../helpers/studentHelper.js");

router.get("/", async (req, res) => {
  try {
    const students = await studentHelper.find();
    res.status(201).json(students);
  } catch (error) {
    console.log(":::: ERROR ::::");
    res.status(500).json({
      ErrorMessage: "There was an error while retrieving all the students"
    });
  }
});

module.exports = router;
