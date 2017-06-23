var Sequelize = require('sequelize');
const db = require('./db');
const activity = require("./activity");
const place = require("./place");
const hotel = require("./hotel");
const restaurant = require("./restaurant");

hotel.belongsTo(place);
restaurant.belongsTo(place);
activity.belongsTo(place);

module.exports = db;

