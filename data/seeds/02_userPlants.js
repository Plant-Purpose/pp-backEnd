
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('userPlants').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('userPlants').insert([
        {
          id: 1,
          user_id: 1,
          created_at: Date.now()
        },
        {
          id: 2,
          user_id: 2,
          plant_id: 2,
          created_at: Date.now()
        },
        {
          id: 3,
          user_id: 3,
          plant_id: 2,
          created_at: Date.now()
        },
      ]);
    });
};
