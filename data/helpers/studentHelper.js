const db = require("../dbconfig.js");

module.exports = {
  find,
  findById,
  create
};

function find() {
  return db("students");
}

function findById(id) {
  return db("students").where({ id });
}

function create(student) {
  return db("students").insert(student);
}
