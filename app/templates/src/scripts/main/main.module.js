'use strict';

var m = require('mithril');
var routes = require('routes');

var home = {};
home.controller = function() {

};
home.view = function() {
    return [
        require('../nav/main-navbar'),
        m('div.container', [
            m('div.jumbotron', [
                m('h1', 'Welcome to your new Mithril Ore Application!'),
                m('p', 'Use the module generator to start building your application further!'),
                m('p', [
                    m('a.btn.btn-primary.btn-lg', {href: 'http://lhorie.github.io/mithril/index.html', role: 'button'}, 'Read About Mithril')
                ])
            ])
        ])

    ];
};

routes['/'] = home;