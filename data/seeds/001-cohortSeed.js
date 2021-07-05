exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("cohorts").insert([
    { name: "WEB14" },
    { name: "WEB15" },
    { name: "WEB16" }
  ]);
};
