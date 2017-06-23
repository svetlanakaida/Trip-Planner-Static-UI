// restaurant.js
// place.js
const db = require('./db');
var Sequelize = require('sequelize');
var restaurant = db.define('restaurant', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cuisine: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }

)

module.exports = restaurant;
