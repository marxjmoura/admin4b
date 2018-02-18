var gulp = require('gulp');
var concat = require('gulp-concat');
var fileinclude = require('gulp-file-include');
var htmlextend = require('gulp-html-extend')
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('build-sass', () => {
    gulp.src('src/scss/admin4b.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', (e) => console.log(e)))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-js', () => {
    gulp.src(['src/js/**/*.js', 'src/js/init.js'])
        .pipe(concat('admin4b.js'))
        .pipe(uglify().on('error', (e) => console.log(e)))
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-html', () => {
    gulp.src(['src/html/**/*.html', '!src/html/includes/**/*.html'])
        .pipe(htmlextend({
            annotations: false,
            verbose: false,
            root: './src/html'
        }).on('error', (e) => console.log(e)))
        .pipe(fileinclude({
            prefix: '@@',
            basepath: './src/html/'
        }).on('error', (e) => console.log(e)))
        .pipe(gulp.dest('docs/'));
});

gulp.task('build', ['build-sass', 'build-js', 'build-html']);

gulp.task('start', ['build'], () => {
    gulp.watch('src/html/**/*.html', ['build-html']);
    gulp.watch('src/scss/**/*.scss', ['build-sass']);
    gulp.watch('src/js/**/*.js', ['build-js']);
});
