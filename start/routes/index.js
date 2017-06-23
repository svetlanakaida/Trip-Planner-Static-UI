const express = require( 'express' );
const router = express.Router();
var Promise = require('bluebird');
var Hotel = require('../models/hotel');
var Restautant = require('../models/restaurant');
var Activity = require('../models/activity');

var dbHotels = Hotel.findAll();
var dbRestaurants = Restautant.findAll();
var dbActivities = Activity.findAll();

router.get('/', function(req, res, next) {
    Promise.all([dbHotels, dbRestaurants, dbActivities]).then(function(promiseArr){
        res.render('index', {
            templateHotels: promiseArr[0],
            templateRestaurants: promiseArr[1],
            templateActivities: promiseArr[2]
        });
    })
    .catch(next);
});

module.exports = router;
