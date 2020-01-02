
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {
          id: 1,
          title: 'Some Note',
          note: "Plants Grew",
          plant_id: 1,
          created_at: Date.now()
        },
        {
          id: 2,
          title: 'Some Note',
          note: "Plants Grew",
          plant_id: 2,
          created_at: Date.now()
        },
        {
          id: 3,
          title: 'Some Note',
          note: "Plants Grew",
          plant_id: 3,
          created_at: Date.now()
        },
      ]);
    });
};
