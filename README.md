# StreamBuilder
Streaming, front-end build tool for automating mundane tasks like minification and uglification. It even refreshes your browser for you.

##What it is
The basic idea of StreamBuilder is to automate the building process so you can focus on actually building your app. StreamBuilder's workflow goes like this:
You work from the /src directory and everytime you save a file; be it SCSS, JavaScript or Jade templates, StreamBuilder compiles SCSS into CSS, minifies JavaScripts and compiles Jade templates to HTML and places the compiled files in the /dist directory. Additionally, StreamBuilder will listen on port 3000 of your localhost environment. So if you have a browser open to the projet (example: http://localhost:3000/streambuilder/dist) StreamBuilder will even refresh your browser for you as you make changes to your source files.

##Requirements
Requires [Nodejs](https://nodejs.org/)

Note: if you run GNU/Linux you can now get the most recent version of Node with your [package manager](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager).

##Getting Started
1. Download this repo to your development environment.
2. From a terminal `cd path/to/streambuilder`
3. `npm update` This will create a new directory "node_modules" where NPM will install all the required node modules.
4. `gulp`

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