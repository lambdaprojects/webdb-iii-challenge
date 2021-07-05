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

router.get("/:id", async (req, res) => {
  try {
    const student = await studentHelper.findById(req.params.id);
    res.status(201).json(student);
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const student = await studentHelper.create(req.body);
    res.status(201).json({ Message: "Student created successfully" });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const student = await studentHelper.update(req.params.id, req.body);
    res.status(201).json({
      Message: `Student with the id ${req.params.id} updated successfully`
    });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const student = await studentHelper.remove(req.params.id);
    res.status(201).json({
      Message: `Student with id ${req.params.id} deleted successfully.`
    });
  } catch (error) {
    console.log(`:: ERROR IS :: ${error}`);
    res.status(500).json(error);
  }
});

module.exports = router;
