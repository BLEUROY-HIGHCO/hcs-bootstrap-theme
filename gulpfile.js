// npm install gulp-sass gulp-concat gulp-rename gulp-minify-css gulp-sourcemaps gulp-autoprefixer gulp-notify gulp-bower
// Requires
var gulp = require('gulp');

// Include plugins

//var sass = require('gulp-ruby-sass');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require("gulp-notify");
//var bower = require('gulp-bower');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');

var config = {
    sassPath: './sass',
    bowerDir: './bower_components'
};


/*
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

gulp.task('icons', function() {
    return gulp.src(config.bowerDir + '/fontawesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});
*/



// tâche CSS = compile
gulp.task('css', function () {
    //console.log('hello');
    gulp.src(config.sassPath + '/bootstrap.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(rename('bootstrap-sass.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(rename('bootstrap-sass.min.css'))
        .pipe(sourcemaps.init())
        .pipe(minifycss())
        .pipe(sourcemaps.write('.', {includeContent: false}))
        .pipe(gulp.dest('./dist/css/'));
});

// Watcher
gulp.task('watch', function() {
    gulp.watch(['./sass/**/*.scss'], ['css']);
});

gulp.task('default', ['css']);
