
exports.up = function (knex) {
    return knex.schema.createTable('userPlants', tbl => {
        // ID
        tbl.increments();

        // FK
        tbl.integar('plant_id');
        tbl.integar('user_id');

        tbl.string('created_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('userPlants');
};
