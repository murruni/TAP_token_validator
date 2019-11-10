// express
var compression = require('compression');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

// middlewares compress all responses & parse application/json
app.use(compression());
app.use(bodyParser.json());

// middleware log to console all request
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

// middleware api routes
app.use('/', require('./token.route'));

// middleware for others routes and verbs
app.all('/*', function (req, res, next) {
    res.status(501).send({ error: 'No implementado' });
    return (next);
});

module.exports = app;