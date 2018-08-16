const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();


gulp.task('imageMin', () =>
  gulp.src('src/img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('img'))
);


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "basedir"
    });

    gulp.watch("src/sass/*.scss", ['sass']);
    gulp.watch("basedir/*").on('change', browserSync.reload);
});


gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('basedir/css'))
  .pipe(browserSync.stream());

});

gulp.task('default', ['serve']);
