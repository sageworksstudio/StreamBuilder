var /* BEGIN ENVIRONMENT CONFIG */
    conf_image_dest     = './dist/img',                     // where to output images
    conf_output_dest    = './dist',                         // the base output directory
    conf_script_dest    = './dist/js',                      // where to output scripts
    conf_style_dest     = './dist/css',                     // where to output styles
    conf_template_dest  = './dist',                         // where to output html templates
    conf_url_dest       = 'http://localhost/StreamBuilder/dist',   // the local URL of the project
    /* END ENVIRONMENT CONFIG */

    browsersync         = require('browser-sync'),
    changed             = require('gulp-changed'),
    gulp                = require('gulp'),
    gulputil            = require('gulp-util'),
    gulpwatch           = require('gulp-watch'), // gulp-watch is not the same as gulp.watch !
    path                = require('path'),
    reload              = browsersync.reload,
    sass                = require('gulp-sass'),
    uglify              = require('gulp-uglify');

/**
 * Compile scss as compressed css
 */
gulp.task('style', function () {
    return gulp.src('./src/scss/layout.scss')
        .pipe(changed(conf_style_dest))
        .pipe(sass({'outputStyle': 'compressed'}))
        .pipe(gulp.dest(conf_style_dest))
        .pipe(reload({stream:true}));
});

/**
 * HTML
 * If the destination file has been changed, reload the page.
 */
gulp.task('templates', function () {
    return gulp.src('./src/html/**')
        .pipe(gulp.dest(conf_output_dest))
        .pipe(reload({stream:true}));
});

/**
 * Move images.
 */
gulp.task('images', function () {
    return gulp.src('./src/img/**')
        .pipe(gulp.dest(conf_image_dest))
        .pipe(reload({stream:true}));
});

/**
 * Compress javascript.
 */
gulp.task('scripts', function () {
    return gulp.src('./src/js/**')
        .pipe(changed(conf_script_dest))
        .pipe(uglify())
        .pipe(gulp.dest(conf_script_dest))
        .pipe(reload({stream:true}));

});

/**
 * Start a proxy server
 */
gulp.task('server', function() {
    browsersync({proxy: conf_url_dest});
})

/**
 * Watch for changed files
 */
gulp.task('watch', function () {
    // watch for files that were changed
    gulp.watch('./src/scss/**/*.scss', ['style']);
    gulp.watch('./src/html/**/*.html', ['templates']);
    gulp.watch('./src/js/**/*.js', ['scripts']);
    // watch for files that are added
    gulpwatch('./src/img/**', function () {
        gulp.src('./src/img/**')
        .pipe(gulp.dest(conf_image_dest))
        .pipe(reload({stream:true}));
    });
    gulpwatch('./src/js/**', function () {
        gulp.src('./src/js/**')
        .pipe(gulp.dest(conf_script_dest))
        .pipe(reload({stream:true}));
    });
    gulputil.log(gulputil.colors.inverse("Shazam! We're up and running."));
});

/**
 * Default task
 */
gulp.task('default', ['style', 'templates', 'images', 'scripts', 'server', 'watch'], function () {
    // Start all tasks
});