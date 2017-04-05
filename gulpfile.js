var gulp = require('gulp');

// Plugins
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var minifycss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');
var rimraf       = require('rimraf');

// Config
var config = {
    sassPath: './'
};

// Sass to css compilation
gulp.task('sass', function () {
    return gulp.src(config.sassPath + '/bootstrap.hcs.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(rename('bootstrap.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('bootstrap.min.css'))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./dist'));
});

// Watcher
gulp.task('watch', ['default'], function () {
    gulp.watch(['./sass/**/*.scss', './theme/**/*.scss', './bootstrap.hcs.scss'], ['clean', 'sass']);
});

// Clean
gulp.task('clean', function () {
    rimraf.sync('dist');
});

gulp.task('default', ['clean', 'sass']);
