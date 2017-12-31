var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");

gulp.task('sass', function () {
    gulp.src('src/admin4bs.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('start', ['sass'], function () {
    gulp.watch('src/**/*.scss', ['sass']);
});
