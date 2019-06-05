const db = require("../dbconfig.js");

module.exports = {
  find,
  findById
};

function find() {
  return db("students");
}

function findById(id) {
  return db("students").where({ id });
}
