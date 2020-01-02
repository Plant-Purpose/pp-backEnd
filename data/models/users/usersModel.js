const db = require("../../dbConfig");

module.exports = {
    get,
    getById,
    insert,
    update,
    remove

};

function get() {
    return db("users");
}

function getById(id) {
    return db('users')
        .where({ id })
        .first();
}

function insert(user) {
    return db("users")
        .insert(user)
        .then(ids => {
            return ids;
        });
}

function update(id, changes) {
    return db("users")
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db("users")
        .where("id", id)
        .del();
}