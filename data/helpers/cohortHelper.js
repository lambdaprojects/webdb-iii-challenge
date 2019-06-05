const db = require("../dbconfig.js");

module.exports = {
  find,
  findById,
  create,
  update,
  remove
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

function update(id, cohort) {
  return db("cohorts")
    .where({ id })
    .update(cohort);
}

function remove(id) {
  return db("cohorts")
    .where({ id })
    .del();
}
