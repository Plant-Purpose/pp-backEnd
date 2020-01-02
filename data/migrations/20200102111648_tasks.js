
exports.up = function (knex) {
    return knex.schema.createTable('tasks', tbl => {
        // ID 
        tbl.increments();

        // String
        tbl.string('title').notNullable();
        tbl.string('task').notNullable();
        tbl.string('deadline').notNullable();
        tbl.string('created_at');

        // Int
        tbl.integar('user_id').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
};
