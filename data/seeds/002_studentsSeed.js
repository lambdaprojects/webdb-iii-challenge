exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students").insert([
    { name: "Amy Wang", cohort_id: "1" },
    { name: "Sarah Hughes", cohort_id: "2" },
    { name: "Lucia Patino", cohort_id: "3" }
  ]);
};
