/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var route = require('koa-route');
var koaStaticCache = require('koa-static-cache');
var koa = require('koa');
var app = module.exports = koa();

// middleware
app.use(logger());
app.use(koaStaticCache(__dirname + '/public'), {
  maxAge: 365 * 24 * 60 * 60
});

// route middleware
var routes = require('./routes.js');
app.use(route.get('/', routes.index));

// listen
app.listen(80);
console.log('listening on port 80');
