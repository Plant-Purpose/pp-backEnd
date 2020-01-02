const db = require('../../dbConfig');

module.exports = {
    get,
    findById,
    add,
    update,
    remove
};

function get() {
    return db("tasks")
}

function findById(id) {
    return db("tasks")
        .where({ id })
        .first();
}

function add(task) {
    return db("tasks")
        .insert(task)
        .then(ids => {
            const [id] = ids;
            return findById(id);
        })
}

function update(id, changes) {
    return db("tasks")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("tasks")
        .where("id", id)
        .del();
}