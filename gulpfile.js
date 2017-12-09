// gulp dependencies
var gulp 					= require('gulp'),
		gulp_watch 		= require('gulp-watch'),
		
		
		browserSync 	= require('browser-sync').create();

// everything on gulp revolves on tasks
gulp.task('default', function() {
	console.log('OMG!!! checking if Gulp task is working...');
});

gulp.task('html', function() {
	console.log('Changes have been done to the HTML file...');
});

// automating the app files
gulp.task('gulp_watch', function() {

	browserSync.init({
		notify: false,
		server: {
			baseDir: "app"
		}
	});

	// HTML automation
	gulp_watch('./app/index.html', function() {
		browserSync.reload();
	});

	// any CSS automation
	gulp_watch('./app/assets/css/**/*.css', function() {
		gulp.start('cssInjection');
	});
});

gulp.task('cssInjection', ['css'], function() {
	return gulp.src('./app/temp/css/app.css')
				 .pipe(browserSync.stream());
});
















































