// gulp dependencies
var gulp 					= require('gulp'),
		gulp_watch 		= require('gulp-watch'),
		postcss 			= require('gulp-postcss'),
		autoprefixer	= require('autoprefixer');

// everything on gulp revolves on tasks
gulp.task('default', function() {
	console.log('OMG!!! checking if Gulp task is working...');
});

gulp.task('html', function() {
	console.log('Changes have been done to the HTML file...');
});

gulp.task('css', function() {
	// gulp will create automatically a temp folder and css file
	return gulp.src('./app/assets/css/app.css ')
				 .pipe(postcss([autoprefixer]))
				 .pipe( gulp.dest('./app/temp/css') );
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
















































