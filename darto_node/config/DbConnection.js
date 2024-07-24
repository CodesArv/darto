//var mysql = require("mysql");
const Sequelize = require("sequelize");
const dbConfig = require("../config/db.config.js");
const sequelize = new Sequelize({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Club = require("../models/club")(sequelize, Sequelize);
db.Tournament = require("../models/Tournament")(sequelize, Sequelize);
db.Team = require("../models/Team")(sequelize, Sequelize);
db.Admin = require("../models/Admin")(sequelize, Sequelize);
db.Centers = require("../models/Centers")(sequelize, Sequelize);
db.DartoArena = require("../models/DartoArena")(sequelize, Sequelize);
db.DartoProfile = require("../models/DartoProfile")(sequelize, Sequelize);
db.EventGallery = require("../models/EventGallery")(sequelize, Sequelize);
db.Footer = require("../models/Footer")(sequelize, Sequelize);
db.HomePage = require("../models/HomePage")(sequelize, Sequelize);
db.Participate = require("../models/Participate")(sequelize, Sequelize);

db.Country = require("../models/Country")(sequelize, Sequelize);

module.exports = db;