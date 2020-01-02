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
    return db("notes")
        .select("id")
}

function findBy(filter) {
    return db("notes")
        .select("id", "user_id", "plant_id")
        .where(filter)
}

function findById(id) {
    return db("notes")
        .where({ id })
        .first();
}

function add(note) {
    return db("notes")
        .insert(note, "id")
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
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