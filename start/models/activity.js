// activity.js
var db = require('./db');
var Sequelize = require('sequelize');
var activity = db.define('activity', {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age_range: {
            type: Sequelize.STRING,
            allowNull: false,
        },

    }

)

module.exports = activity;