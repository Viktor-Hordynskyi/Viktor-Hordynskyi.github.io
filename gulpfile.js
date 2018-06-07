//====== GULP ======//

// Vars
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    kit = require('gulp-kit'),
    prettify = require('gulp-html-prettify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect');
    notify = require("gulp-notify");

// Compile SASS & Minify
gulp.task('sass', function() {
  gulp.src('./sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
gulp.task('sass-report', function () {
  gulp.src('./sass/report.sass')
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer('last 5 versions'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./css'))
    .pipe(connect.reload());
});
//SASS Nested
// gulp.task('sass-nested', function() {
//   gulp.src('./sass/**/*.sass')
//     .pipe(sourcemaps.init())
//     .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
//     .pipe(sass({outputStyle: 'nested'}))
//     .pipe(autoprefixer('last 5 versions'))
//     .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('./css'))
//     .pipe(connect.reload());
// });

// Compile Kit
gulp.task('kit', function() {
  gulp.src('./kit/**/*.kit')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(kit())
    .pipe(prettify({indent_char: ' ', indent_size: 2}))
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

// Concat, Uglify & Rename JS
gulp.task('js', function() {
  gulp.src([
      './js/main/main.js',
      './js/plugins/**/*.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('js'))
    .pipe(connect.reload());
});

// Connect
gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 8000,
    livereload: true
  });
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('./sass/report.sass', ['sass-report']);
  //gulp.watch('./sass/**/*.sass', ['sass-nested']);
  gulp.watch('./kit/**/*.kit', ['kit']);
  gulp.watch('./js/**/*.js', ['js']);
});

// Default
gulp.task('default', ['connect', 'watch'], function() {
  gulp.src('.').pipe(notify("Server Started on http://localhost:8000"));
});