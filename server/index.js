'use strict'; 

const app = require('./server');
const db = require('./db');
const chalk = require('chalk');
const PORT = 1337;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log(chalk.green('db synced'))
  app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`))
});