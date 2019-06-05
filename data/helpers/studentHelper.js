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
  return db("students").where({ id });
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
