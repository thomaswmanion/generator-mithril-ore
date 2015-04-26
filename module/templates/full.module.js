var m = require('mithril');
var routes = require('routes');

var <%= lowerCamelCaseModuleName %> = {};
<%= lowerCamelCaseModuleName %>.controller = function() {
    this.goHome = function() {
        m.route('/');
    };
};
<%= lowerCamelCaseModuleName %>.view = function(vm) {
    return m('div', [
        m('p', '<%= moduleName %>'),
    ]);
};

routes['<%= url %>'] = <%= lowerCamelCaseModuleName %>;