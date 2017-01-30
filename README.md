# StreamBuilder

##What it is
StreamBuilder is an automated build environment well suited for HTML, CSS and JavaScript prototyping. It runs on the (streaming) build system gulp.js. Also included is the Sass CSS extension language.

*__StreamBuilder focuses on four tasks to make your job easier.__*

1. Compile SCSS into minified CSS.
2. Minify JavaScript.
3. Move your html/css/JavaScripts and images from the source (working) folder, to the destination folder.
4. Refresh your browser for you as you make changes to your source files. StreamBuilder will create a proxy server and listen on port 3000 of your localhost environment (example: http://localhost:3000/StreamBuilder/dist).

*__StreamBuilder's workflow__*

You work from the /src directory and everytime you save a file; be it SCSS, JavaScript or html templates, StreamBuilder compiles SCSS into CSS, minifies JavaScripts and places the compiled files in the /dist directory.

##Requirements
Requires [Nodejs](https://nodejs.org/)

Note: if you run GNU/Linux you can now get the most recent version of Node with your [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

##Getting Started
1. Download this repo to your development environment.
2. Install the node modules listed in the package.json file globally. I.e., `sudo npm install -g <node_module>`
3. From a terminal `cd path/to/streambuilder`
4. `npm update` This will create a new directory "node_modules" where NPM will install all the required node modules.
5. Edit the config.json file to reflect your destination URL.
5. Run `gulp`

## Advanced configuration
You can change anything and everything about StreamBuilder by editing the gulpfile.js. By default StreamBuilder compiles everything to the /dist folder. You can chage this behavior (as well as the URL of the project) by editing the `conf_xyz_dest` vars in the top of gulpfile.js.

StreamBuilder comes bundles with SCSS support. You can change this by removing the gulp-scss modules and installing the css pre-processor and template language of your choice then editing the tasks in gulpfile.js. You can find additional modules at [NPM](https://www.npmjs.com/).

##Goodies
Out of the box StreamBuilder will create a single page website.

##Getting Help
If you find a bug or want to see a feature, file it in the [issues section](https://github.com/digi-brains/StreamBuilder/issues).