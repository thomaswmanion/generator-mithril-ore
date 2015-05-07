var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
	browserSync({
		notify: true,
		open: true,
		port: 9000,
		files: ['.tmp/*{,*/*}.*', 'src/*{,*/*}.*', 'bower_components/*{,*/*}.*'],
		server: {
			baseDir: ['.tmp', 'src', 'bower_components'],
			index: 'index.html'
		}
	});
});