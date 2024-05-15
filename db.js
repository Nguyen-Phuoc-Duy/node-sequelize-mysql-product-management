//1
// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testmysql', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
