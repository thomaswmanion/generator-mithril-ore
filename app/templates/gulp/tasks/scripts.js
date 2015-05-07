var gulp = require('gulp');
var browserify = require('gulp-browserify');
var inject = require('gulp-inject');
var plumber = require('gulp-plumber');

var injectModule = inject(gulp.src(['./src/scripts/*{,*/*}.module.js'], {read: false}), {
  starttag: '//inject:modules',
  endtag: '//endinject',
  transform: function (filepath, file, i, length) {
    return 'require(\'' + filepath.replace('/src/scripts/', './') + '\');';
  }
});

var browserifyPipe = browserify({
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
    });
gulp.task('scripts', function() {
    return gulp.src('./src/scripts/app.js')
    .pipe(injectModule)
    .pipe(browserifyPipe)
    .pipe(gulp.dest('./.tmp/'));
});

gulp.task('scriptsreload', function() {
    return gulp.src('./src/scripts/app.js')
    .pipe(injectModule)
    .pipe(browserifyPipe)
    .pipe(gulp.dest('./.tmp/'));
});