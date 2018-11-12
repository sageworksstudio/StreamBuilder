/**
 * - - - - - - - - - - EDIT YOUR PATHS
 * - - - - - - - - - - - - - - - - - -
 */
let paths = {
        styles: {
            watch   : 'src/scss/**/*.scss',
            dest    : 'dest/css/'
        },
        scripts: {
            watch   : 'src/js/**/*.js',
            dest    : 'dest/js/'
        },
        pages: {
            watch   : 'src/pages/**/**/*.njk',  // files to watch (include all partials)
            compile : 'src/pages/templates',    // template used to compile with
            render  : 'src/pages/*njk',         // pages to render (don't render partials)
            dest    : 'dest/'
        },
        images: {
            watch   : 'src/img/**/*',
            dest    : 'dest/img/'
        },
        url: {
            dev     : 'http://streambuilder/dest'
        }
    };










/**
 * - - - - - - - - - - INCLUDE YOUR MODULES
 * - - - - - - - - - - - - - - - - - - - - -
 */

let prefix      = require ('gulp-autoprefixer'),
    beeper      = require ('beeper'),
    browserSync = require ('browser-sync').create (),
    changed     = require ('gulp-changed'),
    colors      = require ('ansi-colors'),
    gulp        = require ('gulp'),
    log         = require ('fancy-log'),
    njkRend     = require ('gulp-nunjucks-render'),
    plumber     = require ('gulp-plumber'),
    reload      = browserSync.reload ,
    sass        = require ('gulp-sass'),
    sourcemaps  = require ('gulp-sourcemaps'),
    uglify      = require ('gulp-uglify');










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
function style(env) {
    if (env !== true) {
        return gulp.src(paths.styles.watch)
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
        return gulp.src(paths.styles.watch)
        .pipe(sourcemaps.init())
        .pipe(sass({'outputStyle':'compressed'}))
        .pipe(sourcemaps.write('./')) //maps are set relative to source
        .pipe(gulp.dest(paths.styles.dest));
    }
}

// Save JavaScript to dest and reload browser.
// 'production' task will uglify final JavaScript output.
function script(env) {
    if (env !== true) {
        return gulp.src(paths.scripts.watch)
        .pipe(plumber({
              errorHandler : onError
          }))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.stream());
    } else {
        return gulp.src(paths.scripts.watch)
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest));
    }
}

// Compile HTML on nunjuck change and reload proxy server.
function page() {
    return gulp.src(paths.pages.render)
    // .pipe(data(function(file){
    //     return JSON.parse(fse.readFileSync('./src/data/data.json'))
    // } ) )
    .pipe(njkRend({
        path:[paths.pages.compile]
    }))
    .pipe(plumber ({
        errorHandler : onError
    }))
    .pipe(gulp.dest(paths.pages.dest))
    .pipe(browserSync.stream());
}

// Images
function image() {
    return gulp.src(paths.images.watch)
    .pipe(changed(paths.images.dest))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.stream());
}

// Watching
function watch() {
    // watch source files
    gulp.watch(paths.scripts.watch, script);
    gulp.watch(paths.styles.watch, style);
    gulp.watch(paths.pages.watch, page);
    gulp.watch(paths.images.watch, image);
}










/**
 * - - - - - - - - - - TASKS
 * - - - - - - - - - - - - -
 */

// Render production ready assets
gulp.task('production', function(done) {
    style(true);
    script(true);
    page();
    image();
    done();
});

gulp.task('default', function() {
    style();
    script();
    page();
    image();
    server();
    watch();
});