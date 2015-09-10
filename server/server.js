/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var route = require('koa-route');
var koa_static = require('koa-static');
var koa = require('koa');
var app = module.exports = koa();

// middleware
app.use(logger());
app.use(koa_static(__dirname + '/public'));

// route middleware
var routes = require('./routes.js');
app.use(route.get('/', routes.index));

// listen
app.listen(80);
console.log('listening on port 80');
