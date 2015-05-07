'use strict';

var m = require('mithril');

module.exports = 
m('div.navbar.navbar-default.navbar-static-top', [
	m('div.container', [
		m('div.navbar-header', [
			m('button.navbar-toggle', [
				m('span.sr-only', 'Toggle navigation'),
				m('span.icon-bar'),
				m('span.icon-bar'),
				m('span.icon-bar')
			]),
			m('a.navbar-brand', {href: '/'}, 'Mithril Ore')
		])
	])
]);