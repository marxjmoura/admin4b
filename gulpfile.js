const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const babelify = require('babelify')
const bro = require('gulp-bro')
const connect = require('gulp-connect')
const htmlmin = require('gulp-htmlmin')
const gap = require('gulp-append-prepend')
const rename = require("gulp-rename")
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const handlebars = require('./handlebars')

const header = `
/*!
 * Admin 4B v2.1.0 (https://getadmin4b.com)
 * Copyright 2017-present Marx J. Moura (https://github.com/marxjmoura)
 * Licensed under MIT (https://github.com/marxjmoura/admin4b/blob/master/LICENSE)
 */`

gulp.task('build-sass', () => {
  return gulp.src('src/scss/admin4b.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', (e) => console.log(e)))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], cascade: false }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gap.prependText(header))
    .pipe(gulp.dest('dist'))
})

gulp.task('build-js', () => {
  return gulp.src('src/js/admin4b.js')
    .pipe(bro({ transform: [babelify.configure({ presets: ['@babel/preset-env'] })] }))
    .pipe(uglify().on('error', (e) => console.log(e)))
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gap.prependText(header))
    .pipe(gulp.dest('dist'))
})

gulp.task('build-html', () => {
  return gulp.src(['src/hbs/**/_*.hbs', 'src/hbs/**/*.hbs'], { base: './src/hbs' })
    .pipe(handlebars())
    .pipe(rename({ extname: '.html' }))
    .pipe(htmlmin({ collapseWhitespace: true })
      .on('error', (e) => console.log(e)))
    .pipe(gulp.dest('docs'))
})

gulp.task('build', gulp.parallel('build-html', 'build-sass', 'build-js'))

gulp.task('watch', done => {
  gulp.watch('src/hbs/**/*.{hbs,html,js,json}', gulp.series('build-html'))
  gulp.watch('src/scss/**/*.scss', gulp.series('build-sass'))
  gulp.watch('src/js/**/*.js', gulp.series('build-js'))

  done()
})

gulp.task('serve', done => {
  connect.server({ root: '.', port: 8888 })
  connect.serverClose()

  done()
})

gulp.task('start', gulp.series('serve', 'watch', 'build'))
