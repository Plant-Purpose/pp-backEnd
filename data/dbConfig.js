const knex = require('knex');
const config = require('../knexfile');
const env = process.env.DB_CONNECT || "development";

module.exports = knex(config[env]);