const db = require("../../dbConfig");

module.exports = {
    get,
    getById,
    getByEmail,
    insert,
    update,
    remove

};

function get() {
    return db("users");
}

function getByEmail(email) {
    console.log('Model', email);
    return db('users')
        .select('id', 'email', 'password')
        .where({ ...email })
        .first();
}

function getById(id) {
    return db('users')
        .select('id', 'email', 'password')
        .where({ id })
        .first();
}

function insert(user) {
    console.log(user)
    return db("users")
        .insert(user)
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
