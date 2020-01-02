const db = require('../../dbConfig');

module.exports = {
    get,
    findById,
    add,
    update,
    remove
};

function get(id) {
    return db("tasks")
        .where({ "user_id": id });
}

function findById(id, task_id) {
    return db("tasks")
        .where({ "user_id": id, "id": task_id })
        .first();
}

function add(task) {
    return db("tasks")
        .insert(task)
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