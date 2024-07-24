const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Club = require("./club")(sequelize, Sequelize);
db.Tournament = require("./Tournament")(sequelize, Sequelize);
db.Slider = require("./slider")(sequelize, Sequelize);
db.Team = require("./myTeam")(sequelize, Sequelize);
db.ContactUs = require("./ContactUs")(sequelize, Sequelize);
db.Admin = require("./Admin")(sequelize, Sequelize);
db.Centers = require("./Centers")(sequelize, Sequelize);
db.DartoArena = require("./DartoArena")(sequelize, Sequelize);
db.DartoProfile = require("./DartoProfile")(sequelize, Sequelize);
db.EventGallery = require("./EventGallery")(sequelize, Sequelize);
db.Footer = require("./Footer")(sequelize, Sequelize);
db.HomePage = require("./HomePage")(sequelize, Sequelize);
db.Participate = require("./Participate")(sequelize, Sequelize);
db.Country =require("./Country")(sequelize, Sequelize);
db.State = require("./State")(sequelize, Sequelize);
db.UserLogin = require("./UserLogin")(sequelize, Sequelize);
db.Board = require("./Boards")(sequelize, Sequelize);
db.City = require("./City")(sequelize, Sequelize);
db.Pincode = require("./pincode")(sequelize, Sequelize);
db.TeamMatch = require("./TeamMatch")(sequelize, Sequelize);
db.MatchScore = require("./MatchScore")(sequelize, Sequelize);
db.Parnter = require("./Partner")(sequelize, Sequelize);
module.exports = db;