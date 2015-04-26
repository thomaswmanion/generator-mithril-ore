'use strict';
var m = require('mithril');
var routes = require('routes');

//Application modules (scripts ending with .module.js) will be injected below at build time.
//inject:modules
//endinject

m.route.mode = 'hash';
m.route(document.getElementById('viewport'), '/', routes);