# StreamBuilder
##What it is
StreamBuilder is an automated build environment well suited for HTML, CSS and JavaScript prototyping. It runs on the (streaming) build system gulp.js. It uses the Jade template language to modularize html into templates, allowing developers to take a DRY approach to front-end development. Also included is the Sass CSS extension language.

*__StreamBuilder focuses on four tasks to make your job easier.__*

1. Compile SCSS into minified CSS.
2. Minify JavaScript.
3. Allow HTML to be templatized so things like headers, footers and common include items can be more easily maintained.
4. Refresh your browser for you as you make changes to your source files. StreamBuilder will create a proxy server and listen on port 3000 of your localhost environment (example: http://localhost:3000/streambuilder/dist).

*__StreamBuilder's workflow__*

You work from the /src directory and everytime you save a file; be it SCSS, JavaScript or Jade templates, StreamBuilder compiles SCSS into CSS, minifies JavaScripts and compiles Jade templates to HTML and places the compiled files in the /dist directory.

##Requirements
Requires [Nodejs](https://nodejs.org/)

Note: if you run GNU/Linux you can now get the most recent version of Node with your [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

##Getting Started
1. Download this repo to your development environment.
2. Install the node modules listed in the package.json file globally. I.e., `sudo npm install -g <node_module>`
3. From a terminal `cd path/to/streambuilder`
4. `npm update` This will create a new directory "node_modules" where NPM will install all the required node modules.
5. `gulp`

## Advanced configuration
You can change anything and everything about StreamBuilder by editing the gulpfile.js. By default StreamBuilder compiles everything to the /dist folder. You can chage this behavior (as well as the URL of the project) by editing the `conf_xyz_dest` vars in the top of gulpfile.js.

StreamBuilder comes bundles with SCSS and Jade templates. You can also change this by removing the gulp-jade and gulp-scss modules and installing the css pre-processor and template language of your choice then editing the tasks in gulpfile.js. You can find additional modules at [NPM](https://www.npmjs.com/).

##Goodies
Out of the box StreamBuilder will create a single page scroller website and includes [Modernizr](http://modernizr.com/) and [jQuery](https://jquery.com/) via [Bower](http://bower.io/).

In some cases it may be helpful to delete the entire destination folder and start over. You can do this by running gulp with the clean flag.

`gulp --clean`

Note: this deletes the entire destination folder as set in the gulpfile.js `conf_output_dest` var.

##Getting Help
If you find a bug or want to see a feature, file it in the [issues section](https://github.com/prawnstar/streambuilder/issues).