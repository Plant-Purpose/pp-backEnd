// find(user_id) => return all user plants
// findBy(user_id, plant_id) => get all user plants, return the one matching

const db = require('../../dbConfig');

module.exports = {
    get,
    findBy,
    findById,
    add,
    update,
    remove
};

function get(id) {
    return db("userPlants")
        .where({ "user_id": id })
}

function findBy(filter) {
    return db("userPlants")
        .select("id", "user_id", "plant_id")
        .where(filter)
}

function findById(id, plant_id) {
    return db("userPlants")
        .where({ "user_id": id, "id": plant_id })
        .first();
}

function add(plant) {
    return db("userPlants")
        .insert(plant);
}

function update(id, changes) {
    return db("userPlants")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("userPlants")
        .where("id", id)
        .del();
}
