var gulp = require('gulp');
var browserify = require('gulp-browserify');
var inject = require('gulp-inject');

gulp.task('scripts', function() {
	gulp.src('./src/scripts/app.js')
    .pipe(inject(gulp.src(['./src/scripts/*{,*/*}.module.js'], {read: false}), {
      starttag: '//inject:modules',
      endtag: '//endinject',
      transform: function (filepath, file, i, length) {
      	return 'require(\'' + filepath.replace('/src/scripts/', './') + '\');';
      }
    }))
	.pipe(browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: false,
      //entries: './src/scripts/app.js',
      // Enable source maps!
      debug: false,
      shim: {
        routes: {
          path: './src/scripts/routes.js',
          exports: 'routes'
        }
      }
    }))
    .pipe(gulp.dest('./.tmp/'));
});