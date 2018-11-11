# StreamBuilder

##What it is
StreamBuilder is an automated build environment well suited for HTML, CSS and JavaScript prototyping. It runs on the (streaming) build system [Gulp.js](https://gulpjs.com/) and comes with goodies like [SASS](https://sass-lang.com/) and [Nunjucks](https://mozilla.github.io/nunjucks/).

*__StreamBuilder focuses on four tasks to make your job easier.__*

1. Compile SCSS into CSS and outpu to the destination folder.
2. Output JavaScript to the destination folder.
3. Compile Nunjuck templates into HTML pages and output them to the pages folder. Keepin' it DRY!
4. In your browser, inject the changed CSS into the HTML and update your view.

*__StreamBuilder's workflow__*

You work from the /src directory and everytime you save a file; be it SCSS, JavaScript or Nunjuck template, StreamBuilder compiles SCSS into CSS, and places compiled JavaScripts and HTML files in the /dist directory.

##Requirements
Requires [Nodejs](https://nodejs.org/)

Note: if you run GNU/Linux you can now get the most recent version of Node with your [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

##Getting Started
1. Download this repo to your development environment.
2. Install the node modules listed in the package.json file globally. I.e., `sudo npm install -g <node_module>`
3. From a terminal `cd path/to/streambuilder`
4. `npm update` This will create a new directory "node_modules" where NPM will install all the required node modules.
5. Edit the config.json file to reflect your destination URL.
6. Run `gulp`

## Advanced configuration
You can change anything and everything about StreamBuilder by editing the gulpfile.js. By default StreamBuilder compiles everything to the /dist folder. You can chage this behavior (as well as the URL of the project) by editing the `conf_xyz_dest` vars in the top of gulpfile.js.

StreamBuilder comes bundles with SCSS and Nunjucks support. You can change this by removing the gulp-scss modules and installing the css pre-processor and template language of your choice then editing the tasks in gulpfile.js. You can find additional modules at [NPM](https://www.npmjs.com/).

##Goodies
Out of the box StreamBuilder will create a single page website.

##Getting Help
If you find a bug or want to see a feature, file it in the [issues section](https://github.com/digi-brains/StreamBuilder/issues).