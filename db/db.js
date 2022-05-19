const knex = require('knex');
require('dotenv').config();
const knexfile = require('./knexfile');

const db = knex(knexfile.development);

module.exports = db;