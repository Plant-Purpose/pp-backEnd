
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          id: 1,
          title: 'Something To Do',
          task: "water the plants",
          user_id: 1,
          deadline: Date.now(),
          created_at: Date.now()
        },
        {
          id: 2,
          title: 'Something To Do',
          task: "water the plants",
          user_id: 2,
          deadline: Date.now(),
          created_at: Date.now()
        },
        {
          id: 3,
          title: 'Something To Do',
          task: "water the plants",
          user_id: 3,
          deadline: Date.now(),
          created_at: Date.now()
        },
      ]);
    });
};
