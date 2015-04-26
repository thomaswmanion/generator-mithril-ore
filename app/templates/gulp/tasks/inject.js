var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('injectModules', function() {
	gulp.src('./.tmp/app.js')
        .pipe(inject(gulp.src(['./src/scripts/dashboard.module.js'], {read: false}), {
          starttag: '//inject:modules',
          endtag: '//endinject',
          transform: function (filepath, file, i, length) {
          	return 'require(\'' + filepath + '\');';
          }
        }))
        .pipe(gulp.dest('./.tmp/app.js'));
});