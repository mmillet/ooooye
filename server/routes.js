
/**
 * Module dependencies.
 */
var parse = require('co-body');
var render = require('./lib/render');
var React = require('react');
 

var counterProps = {count: 123};
var counterComponentFactory = React.createFactory(require('./components/counter'));

// And now... the route definitions
module.exports.index = function *index() {
  var counterHTML = React.renderToStaticMarkup(counterComponentFactory(counterProps));
  this.body = yield render('home/index', {
    time: Date().toString(),
    user: this.request.querystring,
    counterHTML: counterHTML
  });
};