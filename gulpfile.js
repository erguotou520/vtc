const gulp = require('gulp')
const stylus = require('gulp-stylus')

gulp.task('build', () => {
  return gulp.src('./stylus/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./css'))
})

