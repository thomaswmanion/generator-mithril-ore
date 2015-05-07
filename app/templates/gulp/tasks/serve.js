var gulp = require('gulp');

gulp.task('serve', ['lint', 'scripts', 'wiredep','styles', 'browser-sync']);
