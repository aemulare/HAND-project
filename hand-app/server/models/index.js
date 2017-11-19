const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/database.json')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const thisFile = path.basename(__filename);


fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf('.') !== 0 && file !== thisFile && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
