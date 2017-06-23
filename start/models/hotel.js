// place.js
const db = require('./db');
var Sequelize = require('sequelize');
var hotel = db.define('hotel', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        num_stars: {
            type: Sequelize.FLOAT(1, 5),
            allowNull: false,
        },
        amenities: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }

)

module.exports = hotel;
