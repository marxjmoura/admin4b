const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const babelify = require('babelify')
const browserify = require('browserify')
const buffer = require('vinyl-buffer')
const fileinclude = require('gulp-file-include')
const htmlextend = require('gulp-html-extend')
const htmlmin = require('gulp-htmlmin')
const rename = require("gulp-rename")
const sass = require('gulp-sass')
const source = require('vinyl-source-stream')
const uglify = require('gulp-uglify')

gulp.task('build-sass', () => {
  return gulp.src('src/scss/admin4b.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', (e) => console.log(e)))
    .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist'))
})

gulp.task('build-js', () => {
  return browserify({
    entries: ['src/js/index.js'],
    fullPaths: false,
    transform: [babelify.configure({ presets: ['env'] })]
  })
    .bundle().on('error', (e) => console.log(e))
    .pipe(source('admin4b.min.js'))
    .pipe(buffer())
    .pipe(uglify().on('error', (e) => console.log(e)))
    .pipe(gulp.dest('dist'))
})

gulp.task('build-html', () => {
  return gulp.src(['src/html/**/*.html', '!src/html/includes/**/*.html'])
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
    .pipe(gulp.dest('docs/'))
})

gulp.task('build', gulp.parallel('build-html', 'build-sass', 'build-js'))

gulp.task('build-watching', () => {
  gulp.watch('src/html/**/*.html', gulp.series('build-html'))
  gulp.watch('src/scss/**/*.scss', gulp.series('build-sass'))
  gulp.watch('src/js/**/*.js', gulp.series('build-js'))
})

gulp.task('start', gulp.series('build', 'build-watching'))
