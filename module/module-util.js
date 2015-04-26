var moduleUtil = module.exports = {};
var naming = require('../util/naming');

moduleUtil.getDefaultModuleFolder = function(moduleName) {
	return naming.toDasherized(moduleName) + '/';
};