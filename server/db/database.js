const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/skool_helpr', {
  logging: false
})

module.exports = db;