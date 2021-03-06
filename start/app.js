const express = require('express');
const app = express();
const db = require('./models/db');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const path = require('path');
app.use(volleyball);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/bootstrap', express.static(path.join(__dirname, "node_modules/bootstrap/dist")));
app.use('/jquery', express.static(path.join(__dirname, "node_modules/jquery/dist")));
// app.use('/jquery', express.static(path.join(__dirname, "node_modules/jquery/dist")));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
// app.use(express.static("node_modules"));


app.use('/', routes);

// add routes here


app.use(function(req, res, next) {
    const err = new Error('That page doesn\'t exist!');
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    err.status = err.status || 500;
    console.log(err);
    res.status(err.status).render('error', { err: err });
});

db.sync()
    .then(function() {
        app.listen(1337, function() {
            console.log("Server is listening on port 1337");
        });
    });