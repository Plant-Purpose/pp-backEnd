
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          full_name: 'Bernard Johnson',
          email: "letslearntechyt@gmail.com",
          password: "password",
          phone: "555-5555",
          location: "US"
        },
        {
          id: 2,
          full_name: 'April Clements',
          email: "april@gmail.com",
          password: "password",
          phone: "555-5555",
          location: "US"
        },
        {
          id: 3,
          full_name: 'Alberto Galvan',
          email: "Al@gmail.com",
          password: "password",
          phone: "555-5555",
          location: "US"
        },
      ]);
    });
};
