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

function get() {
    return db("userPlants")
        .select("id")
}

function findBy(filter) {
    return db("userPlants")
        .select("id", "user_id", "plant_id")
        .where(filter)
}

function findById(id) {
    return db("userPlants")
        .where({ id })
        .first();
}

function add(note) {
    return db("userPlants")
        .insert(note, "id")
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
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
