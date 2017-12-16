var gulp  		= require('gulp'),
		imagemin 	= require('gulp-imagemin'),
		del 			= require('del')
		usemin 		= require('gulp-usemin');

gulp.task('delete_dist_folder', function() {
	return del('./dist')
});

gulp.task('optimized_images', ['delete_dist_folder'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
				 .pipe(imagemin({
				 		progressive: true,
				 		interlaced: true,
				 		multipass: true
				 }))
				 .pipe(gulp.dest('./dist/assets/images '));
});

gulp.task('usemin', ['delete_dist_folder'], function() {
	return gulp.src('./app/index.html')
				 .pipe(usemin())
				 .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['delete_dist_folder', 'optimized_images', 'usemin']);