const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
    tableName: "dbmigrations"
  },
  seeds: { directory: "./data/seeds" }
};

module.exports = config;
