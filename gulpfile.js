const gulp = require('gulp');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('build-sass', () => {
    gulp.src('src/scss/admin4bs.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', (e) => console.log(e)))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-js', () => {
    gulp.src('src/js/**/*.js')
        .pipe(concat('admin4bs.js'))
        .pipe(uglify().on('error', (e) => console.log(e)))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-html', () => {
    gulp.src(['src/html/**/*.html', '!src/html/includes/**/*.html'], { base: 'src/html/' })
        .pipe(fileinclude({ prefix: '@@', basepath: 'src/html/' }).on('error', (e) => console.log(e)))
        .pipe(gulp.dest('preview/'));
});

gulp.task('build', ['build-sass', 'build-js', 'build-html']);

gulp.task('start', ['build'], () => {
    gulp.watch('src/html/**/*.html', ['build-html']);
    gulp.watch('src/scss/**/*.scss', ['build-sass']);
    gulp.watch('src/js/**/*.js', ['build-js']);
});
