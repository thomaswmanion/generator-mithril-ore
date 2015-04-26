var naming = module.exports = {};
var _ = require('underscore');
_.str = require('underscore.string');
_.inflections = require('underscore.inflections');
_.mixin(_.str.exports());
_.mixin(_.inflections);

naming.toDasherized = function(name) {
	name = name.toString().replace(/\./g, '-');
	name = naming.toLowerCamelCase(name);
	return _.dasherize(name);
};

naming.toLowerCamelCase = function(name) {
	name = _(name.toString()).chain().clean().trim().dasherize().slugify().classify().value();
	return name.substr(0, 1).toLowerCase() + name.substr(1);
};