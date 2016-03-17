var gulp = require('gulp'),
  less = require('gulp-less'),
  rename = require('gulp-rename');
  connect = require('gulp-connect');
var minifycss = require('gulp-minify-css');
 
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});


gulp.task('styles', function(){
  gulp.src(['src/less/**/*.less'])
    .pipe(less())
    .pipe(gulp.dest('dist/css/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css/'))
    .pipe(connect.reload())
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch("*.html", ['html']);
  gulp.watch("src/less/**/*.less", ['styles']);
});
 
gulp.task('default', ['connect', 'watch']);