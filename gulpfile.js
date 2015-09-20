var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var gulp = require('gulp');

gulp.task('less', function() {
    return gulp.src('./styles/less/**/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest('./styles/css'))
});

gulp.task('watch', function(){
	watch('./styles/less/**/*.less', function(events, done){
		console.log('building less...')
		gulp.start('less');
	});
});