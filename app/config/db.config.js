const env = require("./env.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.book = require("../model/book.model.js")(sequelize, Sequelize);
db.user = require("../model/user.model.js")(sequelize , Sequelize);

module.exports = db;
