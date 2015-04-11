var /* BEGIN ENVIRONMENT CONFIG */
    conf_bower_dest     = './dist/bower_components',        // where to output the bower directory
    conf_image_dest     = './dist/img',                     // where to output images
    conf_output_dest    = './dist',                         // the base output directory
    conf_script_dest    = './dist/js',                      // where to output scripts
    conf_style_dest     = './dist/css',                     // where to output styles
    conf_template_dest  = './dist',                         // where to output html templates
    conf_url_dest       = 'localhost/streambuilder/dist',   // the local URL of the project
    /* END ENVIRONMENT CONFIG */

    browsersync         = require('browser-sync'),
    changed             = require('gulp-changed'),
    clean               = false,
    database            = require('./src/db/database.json'),
    gulp                = require('gulp'),
    gulpif              = require('gulp-if'),
    gulputil            = require('gulp-util'),
    jade                = require('gulp-jade'),
    path                = require('path'),
    reload              = browsersync.reload,
    rimraf              = require('rimraf'),
    sass                = require('gulp-sass'),
    uglify              = require('gulp-uglify');


/**
 * Check to see if --vars were set.
 */
process.argv.forEach(function (val) {
    if (val === '--clean') {
        clean = true;
    }
});


/**
 * Remove dist directory.
 */
gulp.task('clean', function (cb) {
    rimraf(conf_output_dest, cb);
});


/**
 * Compile scss as compressed css.
 */
gulp.task('style', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(changed(conf_style_dest))
        .pipe(sass({'outputStyle': 'compressed'}))
        .pipe(gulp.dest(conf_style_dest))
        .pipe(reload({stream:true}));
});


/**
 * Jade to html.
 */
gulp.task('templates', function () {
    return gulp.src('./src/jade/*.jade')
        .pipe(jade({
            'pretty': true,
            'locals': database
        }))
        .pipe(gulp.dest(conf_template_dest))
        .pipe(reload({stream:true}));
});


/**
 * Move images.
 */
gulp.task('images', function () {
    gulp.src('./src/img/**')
        .pipe(gulp.dest(conf_image_dest));
});


/**
 * Move bower components.
 */
gulp.task('bower', function () {
    gulp.src('./src/bower_components/**')
        .pipe(gulp.dest(conf_bower_dest));
});


/**
 * Compress javascript.
 */
gulp.task('scripts', function () {
    return gulp.src('./src/js/*.js')
        .pipe(changed(conf_script_dest))
        .pipe(uglify())
        .pipe(gulp.dest(conf_script_dest))
        .pipe(reload({stream:true}));

});


/**
 * All build tasks.
 */
gulp.task('build', ['style', 'templates', 'images', 'bower', 'scripts']);


/**
 * Watch for chaned files
 */
gulp.task('watch', ['build'], function () {
    browsersync({
        proxy: conf_url_dest
    });
    gulp.watch('./src/scss/*.scss', ['style']);
    gulp.watch('./src/jade/**/*.jade', ['templates']);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/db/database.json', ['clean', 'build']);
    gulp.watch('./dist/*html').on('change', reload);
    gulputil.log(gulputil.colors.inverse("Shazam! We're up and running."));
});


/**
 * Default task
 */
gulp.task('default', function () {
    if (clean === true) {
        gulp.start(['clean']);
    } else {
        gulp.start(['watch']);
    }
});