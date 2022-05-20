// const config = require("../knexfile");
// const knex = require("knex")(config);

// module.exports = knex;

const knex = require('knex');
require('dotenv').config({
	path: "../.env",
  });
const config = require('../knexfile');

module.exports = knex(config);