var gulp = require('gulp');

// Plugins
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat       = require('gulp-concat');
var rename       = require('gulp-rename');
var minifycss    = require('gulp-minify-css');
var sourcemaps   = require('gulp-sourcemaps');

// Config
var config = {
    sassPath: './'
};

// Sass to css compilation
gulp.task('sass', function () {
    return gulp.src(config.sassPath + '/bootstrap.hcs.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('bootstrap-sass.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(rename('bootstrap-sass.min.css'))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./dist'));
});

// Watcher
gulp.task('watch', function () {
    gulp.watch(['./sass/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);
