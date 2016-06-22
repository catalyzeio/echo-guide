var Promise = require('es6-promise').Promise;
// The above was necessary to fix compile-time errors: http://stackoverflow.com/a/35229818
var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var concat = require('gulp-concat');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];
var jsPaths = [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/what-input/what-input.min.js',
    'bower_components/foundation-sites/dist/foundation.min.js',
    'bower_components/svg-injector/dist/svg-injector.min.js'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('scripts', function() {
  return gulp.src(jsPaths)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js/dist/'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
