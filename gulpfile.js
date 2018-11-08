/**
 * - - - - - - - - - - EDIT YOUR PATHS
 * - - - - - - - - - - - - - - - - - -
 */
let paths = {
        styles: {
            src: 'src/scss/**/*.scss',
            dest: 'css/'
        },
        scripts: {
            src: 'src/javascript/**/*.js',
            dest: 'javascript/'
        },
        url: {
            dev: 'http://ladonnawitmer'
        }
    };










/**
 * - - - - - - - - - - INCLUDE YOUR MODULES
 * - - - - - - - - - - - - - - - - - - - - -
 */

let prefix      = require ('gulp-autoprefixer'),
    beeper      = require ('beeper'),
    browserSync = require ('browser-sync').create (),
    //changed     = require ('gulp-changed'),
    colors      = require ('ansi-colors'),
    gulp        = require ('gulp'),
    log         = require ('fancy-log'),
    plumber     = require ('gulp-plumber'),
    reload      = browserSync.reload ,
    sass        = require ('gulp-sass'),
    sourcemaps  = require ('gulp-sourcemaps'),
    uglify      = require('gulp-uglify');










/**
 * - - - - - - - - - - FUNCTIONS
 * - - - - - - - - - - - - - - -
 */

// Log errors and don't break the stream.
function onError(err) {
    console.log(err);
    beeper(2);
};

// Create a new proxy server to view dest.
function server() {
    browserSync.init ({
       proxy  : paths.url.dev,
       notify : false
    });
    log(colors.redBright.bold.bgWhiteBright("Excelsior! We're up and running."));
};

// Compile scss into css and reload proxy server.
// 'production' mode will compress final css output.
function styles(env) {
    if (env !== true) {
        return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({'outputStyle':'expanded'}))
        .pipe(plumber({
              errorHandler : onError
          }))
        .pipe(prefix({
            grid: true,
            flexbox: true
        }))
        .pipe(sourcemaps.write('./')) //maps are set relative to source
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.stream());
    } else {
        return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({'outputStyle':'compressed'}))
        .pipe(sourcemaps.write('./')) //maps are set relative to source
        .pipe(gulp.dest(paths.styles.dest));
    }
}

// Save JavaScript to dest and reload browser.
// 'production' task will uglify final JavaScript output.
function scripts(env) {
    if (env !== true) {
        return gulp.src(paths.scripts.src)
        .pipe(plumber({
              errorHandler : onError
          }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
    } else {
        return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
    }
}

// Watching
function watch() {
    // watch source files
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}










/**
 * - - - - - - - - - - TASKS
 * - - - - - - - - - - - - -
 */

// Render production ready assets
gulp.task('production', function(done) {
    styles(true);
    scripts(true);
    done();
});

gulp.task('default', function() {
    styles();
    scripts();
    server();
    watch();
});