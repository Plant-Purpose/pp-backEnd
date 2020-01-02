const db = require('../../dbConfig');

module.exports = {
    get,
    findBy,
    findById,
    add,
    update,
    remove
};

function get(plant_id) {
    return db("notes")
        .where({ plant_id });
}

function findBy(filter) {
    return db("notes")
        .select("id", "user_id", "plant_id")
        .where(filter)
}

function findById(plant_id, note_id) {
    return db("notes")
        .where({ plant_id, "id": note_id })
        .first();
}

function add(note) {
    console.log(note)
    return db("notes")
        .insert(note)
}

function update(id, changes) {
    return db("notes")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("notes")
        .where("id", id)
        .del();
}