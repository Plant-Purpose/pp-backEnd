
exports.up = function (knex) {
    return knex.schema.createTable('notes', tbl => {
        // ID
        tbl.increments();

        // Strings
        tbl.string('title').notNullable();
        tbl.string('note').notNullable();
        tbl.string('created_at');

        // Integars
        tbl.integar('plant_id').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('notes');
};
