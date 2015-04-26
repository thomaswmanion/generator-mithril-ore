var changed    = require('gulp-changed');
var gulp       = require('gulp');
var imagemin   = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('./src/images/**')
    .pipe(changed('./dist/images')) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest('./dist/images'));
});