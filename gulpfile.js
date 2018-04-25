const gulp = require('gulp');
const concat = require('gulp-concat');
const fileinclude = require('gulp-file-include');
const htmlextend = require('gulp-html-extend')
const htmlmin = require('gulp-htmlmin');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

gulp.task('build-sass', () => {
    gulp.src('src/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', (e) => console.log(e)))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-js', () => {
    gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/js/**/*.js'])
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
        .pipe(htmlmin({ collapseWhitespace: true }).on('error', (e) => console.log(e)))
        .pipe(gulp.dest('docs/'));
});

gulp.task('build', ['build-sass', 'build-js', 'build-html']);

gulp.task('start', ['build'], () => {
    gulp.watch('src/html/**/*.html', ['build-html']);
    gulp.watch('src/scss/**/*.scss', ['build-sass']);
    gulp.watch('src/js/**/*.js', ['build-js']);
});
