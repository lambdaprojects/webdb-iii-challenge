const db = require("../dbconfig.js");

module.exports = {
  find,
  findById,
  create
};

function find() {
  return db("cohorts");
}

function findById(id) {
  return db("cohorts").where({ id });
}

function create(cohort) {
  return db("cohorts").insert(cohort);
}
