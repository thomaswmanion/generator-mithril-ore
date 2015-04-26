var gulp = require('gulp');
var less = require('gulp-less');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task('styles', ['appStyles', 'vendorStyles']);

gulp.task('appStyles', function () {
  return gulp.src('src/styles/app.less')
        .pipe(plumber())
        .pipe(less({
            paths: ['src/styles/']
        }))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./.tmp'));
});

gulp.task('vendorStyles', function() {
	return gulp.src('src/vendor-styles/vendor.less')
		.pipe(plumber())
		.pipe(less({
			paths: ['src/vendor-styles/']
		}))
		.pipe(rename('vendor.css'))
		.pipe(gulp.dest('./.tmp'));
});