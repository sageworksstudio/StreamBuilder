var browserSync = require('browser-sync').create(),
    changed     = require('gulp-changed'),
    config      = require('./config.json').configuration,
    gulp        = require('gulp'),
    gulputil    = require('gulp-util'),
    gulpwatch   = require('gulp-watch'),
    reload      = browserSync.reload,
    sass        = require('gulp-sass'),
    uglify      = require('gulp-uglify');

/**
 * Style
 */
gulp.task('style', function () {
    return gulp.src(config.source.style)
        .pipe(changed(config.destination.style, {extension: '.css'}))
        .pipe(sass({'outputStyle': 'compressed'}))
        .pipe(gulp.dest(config.destination.style))
        .pipe(reload({stream:true}));
});

/**
 * Images
 */
gulp.task('image', function () {
    return gulp.src(config.source.img)
        .pipe(changed(config.destination.img))
        .pipe(gulp.dest(config.destination.img))
        .pipe(reload({stream:true}));
});

/**
 * Script
 */
gulp.task('script', function () {
    return gulp.src(config.source.js)
        .pipe(changed(config.destination.js, {extension: '.js'}))
        .pipe(uglify())
        .pipe(gulp.dest(config.destination.js))
        .pipe(reload({stream:true}));
});

/**
 * HTML
 */
gulp.task('html', function () {
    return gulp.src(config.source.html)
        .pipe(changed(config.destination.html, {extension: '.html'}))
        .pipe(gulp.dest(config.destination.html))
        .pipe(reload({stream:true}));
});

/**
 * Server
 */
gulp.task('server', function (){
    browserSync.init({
        proxy: config.devUrl
    });
});

/**
 * Watch
 */
gulp.task('watch', function (){

    gulpwatch(config.source.style, ['style'], function () {
        gulp.src(config.source.style)
        .pipe(changed(config.destination.style, {extension: '.css'}))
        .pipe(sass({'outputStyle': 'compressed'}))
        .pipe(gulp.dest(config.destination.style))
        .pipe(reload({stream:true}));
    });

    gulpwatch(config.source.img, ['image'], function () {
        gulp.src(config.source.img)
        .pipe(changed(config.destination.img))
        .pipe(gulp.dest(config.destination.img))
        .pipe(reload({stream:true}));
    });

    gulpwatch(config.source.js, ['script'], function () {
        gulp.src(config.source.js)
        .pipe(changed(config.destination.js, {extension: '.js'}))
        .pipe(uglify())
        .pipe(gulp.dest(config.destination.js))
        .pipe(reload({stream:true}));
    });

    gulpwatch(config.source.html, ['html'], function () {
        gulp.src(config.source.html)
        .pipe(changed(config.destination.html, {extension: '.html'}))
        .pipe(gulp.dest(config.destination.html))
        .pipe(reload({stream:true}));
    });
});

/**
 * Default task
 */
gulp.task('default', ['style', 'image', 'script', 'html', 'server', 'watch'], function () {
    gulputil.log(gulputil.colors.inverse("Excelsior! We're up and running."));
});