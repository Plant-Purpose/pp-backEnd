
exports.up = function (knex) {
    return knex.schema.createTable('userPlants', tbl => {
        // ID
        tbl.increments();

        // FK
        tbl.int('plant_id');
        tbl.int('user_id');

        tbl.string('created_at');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('userPlants');
};
