// gulp dependencies
var gulp 				= require('gulp'),
		gulp_watch 	= require('gulp-watch');

// everything on gulp revolves on tasks
gulp.task('default', function() {
	console.log('OMG!!! checking if Gulp task is working...');
});

gulp.task('html', function() {
	console.log('Changes have been done to the HTML file...');
});

gulp.task('css', function() {
	console.log('Changes have been done to the CSS file...');
});

// automating the app files
gulp.task('gulp_watch', function() {
	// HTML automation
	gulp_watch('./app/index.html', function() {
		gulp.start('html');
	});

	// any CSS automation
	gulp_watch('./app/assets/css/**/*.css', function() {
		gulp.start('css');
	});
});
















































