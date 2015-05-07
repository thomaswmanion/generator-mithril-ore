'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var naming = require('../util/naming');
var appUtil = require('./app-util');
var gen;
module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
    gen = this;
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s generate a beautiful ' + chalk.red('Mithril') + ' app!'
    ));

    var prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What would you like the name of your application to be?',
      default: appUtil.getParentFolderNameDasherized()
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.props.dasherizedAppName = naming.toDasherized(this.props.appName);
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template(this.templatePath('_package.json'), this.destinationPath('package.json'), this.props);
      this.template(this.templatePath('_bower.json'), this.destinationPath('bower.json'), this.props);
      var files = ['src/index.html', 'src/scripts/app.js', 'src/scripts/routes.js'];
      files = files.concat(['src/styles/app.less', 'src/vendor-styles/vendor.less']);
      files.push('src/scripts/main/main.module.js');
      files.push('src/scripts/nav/main-navbar.js');
      files.forEach(function(f) {
        gen.template(gen.templatePath(f), gen.destinationPath(f), gen.props);
      });
    },

    projectfiles: function () {
      this.fs.copy(this.templatePath('editorconfig'), this.destinationPath('.editorconfig'));
      this.fs.copy(this.templatePath('jshintrc'), this.destinationPath('.jshintrc'));
      this.fs.copy(this.templatePath('.jscsrc'), this.destinationPath('.jscsrc'));
      this.fs.copy(this.templatePath('.jshintignore'), this.destinationPath('.jshintignore'));
    },

    gulp: function() {
      this.template(this.templatePath('gulpfile.js'), this.destinationPath('gulpfile.js'), this.props);
      var files = this.expand('gulp/*{,*/*}.js', {
        cwd: this.sourceRoot()
      });
      files.forEach(function(file) {
        gen.copy(file, file);
      });
    }
  },

  install: function () {
    this.installDependencies();
  }
});