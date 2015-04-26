'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');
var fs = require('fs');
var naming = require('../util/naming');
var moduleUtil = require('./module-util');
var gen;
module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    gen = this;
  },

  promptiing: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Time to scaffold a ' + chalk.red('module') + '!'));

    var prompts = [{
      type: 'input',
      name: 'moduleName',
      message: 'What would you like the name of your module to be?',
      validate: function(moduleName) {
      	if (!moduleName || !moduleName.trim()) {
      		return false;
      	}
      	gen.moduleName = moduleName;
      	return true;
      }
    }, {
    	when: function(props) {
    		gen.defaultUrl = '/' + naming.toDasherized(props.moduleName);
    		return true;
    	},
    	type: 'input',
    	name: 'url',
    	message: 'What do you want the URL to be?',
    	default: function() {
    		return gen.defaultUrl;
    	}
    }, {
    	when: function(props) {
    		gen.defaultPath = moduleUtil.getDefaultModuleFolder(props.moduleName);
    		return true;
    	},
    	type: 'input',
    	name: 'path',
    	message: 'Where would you like this module to be placed?',
    	default: function() {
    		return gen.defaultPath;
    	}
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.dasherizedModuleName = naming.toDasherized(this.props.moduleName);
      this.props.lowerCamelCaseModuleName = naming.toLowerCamelCase(this.props.moduleName);
      var moduleFilename = this.props.dasherizedModuleName + '.module.js';
      this.props.fullPath = path.join('src', 'scripts', this.props.path, moduleFilename);

      done();
    }.bind(this));
  },

  writing: {
    module: function() {
    	this.template(this.templatePath('full.module.js'), this.destinationPath(this.props.fullPath), this.props);
    }
  }

});