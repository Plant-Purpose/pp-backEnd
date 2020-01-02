
exports.up = function (knex) {
    return knex.schema.createTable('userPlants', tbl => {
        // ID
        tbl.increments();

        // FK
        tbl.integer('plant_id');

        tbl.string('create_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('userPlants');
};
