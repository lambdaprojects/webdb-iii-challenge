const db = require("../dbconfig.js");

module.exports = {
  find,
  findById
};

function find() {
  return db("cohorts");
}

function findById(id) {
  return db("cohorts").where({ id });
}
