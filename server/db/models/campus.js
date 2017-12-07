const Sequelize = require('sequelize');
const db = require('../database.js');

module.exports = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://www.fullstackacademy.com/images/fa-logo@2x.png" 
  },
  description: {
    type: Sequelize.TEXT
  }
})