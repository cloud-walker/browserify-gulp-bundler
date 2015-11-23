var gulp     = require('gulp')
var sequence = require('gulp-sequence')
var del      = require('del')
var lazypipe = require('lazypipe')
var bundler  = require('../lib')

gulp.task('default', sequence('clean', 'multi:watch'))
gulp.task('test', sequence('clean', 'nomatch', 'single', 'multi'))

gulp.task('clean', function () {
  return del('dist')
})

gulp.task('nomatch', function () {
  return bundler('something/index.js')
})
gulp.task('nomatch:watch', function (argument) {
  return bundler('something/index.js', {watch: true})
})

gulp.task('single', function () {
  return bundler('src/index.js')
})
gulp.task('single:watch', function () {
  return bundler('src/index.js', {watch: true})
})

gulp.task('multi', function () {
  return bundler('src/*.js')
})
gulp.task('multi:watch', function () {
  return bundler('src/*.js', {
    watch: true,
    paths: ['src'],
    sourcemaps: true,
    pipes: lazypipe()
      .pipe(gulp.dest, 'dist')
  })
})
