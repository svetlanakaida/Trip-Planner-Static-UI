// place.js
var db = require('./db');
var Sequelize = require('sequelize');
var hotel = db.define('hotel', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        num_stars: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        amenities: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }

)

module.exports = hotel;