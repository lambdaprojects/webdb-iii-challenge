const db = require("../dbconfig.js");

module.exports = {
  find,
  findById,
  create,
  update,
  remove
};

function find() {
  return db("students");
}

function findById(id) {
  //return db("students").where({ id });
  return db
    .select(["students.id", "students.name", "cohorts.name as cohort"])
    .from("students")
    .innerJoin("cohorts", "students.cohort_id", "cohorts.id")
    .where("students.id", 2);
}

function create(student) {
  return db("students").insert(student);
}

function update(id, student) {
  return db("students")
    .where({ id })
    .update(student);
}

function remove(id) {
  return db("students")
    .where({ id })
    .del();
}
