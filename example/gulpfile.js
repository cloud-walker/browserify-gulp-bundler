var gulp     = require('gulp');
var sequence = require('gulp-sequence');
var del      = require('del');
var bundler  = require('../lib');

gulp.task('default', sequence('clean', 'js:watch'));

gulp.task('clean', function () {
  return del('dist');
});

const src = 'index.js'

gulp.task('js', function () {
  return bundler(src);
});
gulp.task('js:watch', function () {
  return bundler(src);
});
