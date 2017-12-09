// gulp dependencies
var gulp 					= require('gulp'),
		postcss 			= require('gulp-postcss'),
		autoprefixer	= require('autoprefixer'),
		cssvars				= require('postcss-simple-vars'),
		nested 				= require('postcss-nested'),
		cssImport 		= require('postcss-import');

// task dedicated to CSS styles
gulp.task('css', function() {
	// gulp will create automatically a temp folder and css file
	console.log('Changes have been done to the CSS file...');
	return gulp.src('./app/assets/css/app.css ')
				 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
				 .on('error', function(error) { // error handling function
				 		console.log(error.toString());
					 	this.emit('end');
				 })
				 .pipe( gulp.dest('./app/temp/css') );
});