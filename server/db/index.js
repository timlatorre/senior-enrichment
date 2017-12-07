'use strict'
const db = require('./database')
const chalk = require('chalk');
require('./models');

console.log(chalk.yellow("Opening database connection"));

module.exports = db;