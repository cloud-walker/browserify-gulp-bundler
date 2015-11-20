import gulp     from 'gulp'
import babel    from 'gulp-babel'
import sequence from 'gulp-sequence'
import plumber  from 'gulp-plumber'
import notify   from 'gulp-notify'
import watch    from 'gulp-watch'
import del      from 'del'

const src  = 'src/**/*.js'
const dest = 'lib'

gulp.task('default', sequence('build', 'babel:watch'))
gulp.task('build', sequence('clean', 'babel'))

gulp.task('clean', function () {
  return del(dest)
})

gulp.task('babel', function () {
  return gulp.src(src)
    .pipe(plumber({
      errorHandler: notify.onError({
        title  : 'Babel Error',
        message: '<%= error.message %>'
      })
    }))
    .pipe(babel())
    .pipe(gulp.dest(dest))
})

gulp.task('babel:watch', function () {
  return watch(src, function () {
    gulp.start('babel')
  })
})
