var gulp  				= require('gulp'),
		imagemin 			= require('gulp-imagemin'),
		del 					= require('del')
		usemin 				= require('gulp-usemin'),
		rev 					= require('gulp-rev'),
		cssnano 			= require('gulp-cssnano'),
		uglify 				= require('gulp-uglify'),
		browserSync 	= require('browser-sync').create();

gulp.task('preview_dist', function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('delete_dist_folder', ['icons'], function() {
	return del("./docs");
});

gulp.task('copy_general_files', ['delete_dist_folder'], function() {
	var path_to_copy = [
		'./app/**/*',
		'!./app/index.html',
		'!./app/assets/images/**',
		'!./app/assets/css/**',
		'!./app/assets/scripts/**',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(path_to_copy)
		.pipe(gulp.dest('./docs'));
});

gulp.task('optimized_images', ['delete_dist_folder'], function() {
	return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
				 .pipe(imagemin({
				 		progressive: true,
				 		interlaced: true,
				 		multipass: true
				 }))
				 .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('usemin_trigger', ['delete_dist_folder'], function() {
	gulp.start('usemin');
});

gulp.task('usemin', ['css', 'scripts'], function() {
	return gulp.src('./app/index.html')
				 .pipe(usemin({
				 		css: [function() {return rev()}, function() {return cssnano()}],
				 		js: [function() {return rev()}, function() {return uglify()}]
				 }))
				 .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['delete_dist_folder', 'copy_general_files', 'optimized_images', 'usemin_trigger']);