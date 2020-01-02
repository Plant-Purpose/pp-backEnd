exports.up = function (knex) {
    return knex.schema.createTable('users', tbl => {
        // ID
        tbl.increments();

        // Strings
        tbl.string('full_name').notNullable();
        tbl.string('email').unique().notNullable();
        tbl.string('password').notNullable();

        tbl.string('phone');
        tbl.string('location');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('users');
};
