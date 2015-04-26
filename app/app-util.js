var appUtil = module.exports = {};
var path = require('path');
var naming = require('../util/naming');

appUtil.getParentFolderNameDasherized = function() {
	var f = path.basename(process.cwd());
	console.log(f);
	return naming.toDasherized(f);
};