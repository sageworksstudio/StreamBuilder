# StreamBuilder

## What it is
StreamBuilder is an automated build environment well suited for HTML, CSS and JavaScript prototyping. It runs on the (streaming) build system [Gulp](https://gulpjs.com/) and comes with goodies like the [SASS](https://sass-lang.com/) CSS extension language and the [Nunjucks](https://mozilla.github.io/nunjucks/) template language.

## What it does

By working in the `/src` directory all of your changes are piped and rendered to the `/dest` folder.

- `/src/scss` -> `/dest/css`
- `/src/js` -> `/dest/js`
- `/src/pages` -> `/dest/`
- `/src/img` -> `/dest/img`
- It even refreshes your browser on every change!

## Requirements

Requires [Nodejs](https://nodejs.org/)

## Getting Started
- Download this repo to your development environment.
- Install the node modules listed in the package.json file globally. I.e., `sudo npm install -g <node_module>`
- From a terminal `cd path/to/streambuilder`
- Run `npm install` This will create a new directory "node_modules" where NPM will install all the required node modules.
- Edit the paths variable in the `gulpfile.js` file to reflect your `src` and `dest` paths as well as your application URL.
- Run `gulp`

## Production mode

By default StreamBuilder runs in development mode and outputs uncompressed CSS and JavaScript. To output compressed files you can run StreamBuilder in production mode. `gulp production` Production mode will not start a server nor will it watch for any changes.

## Advanced configuration
You can change anything and everything about StreamBuilder by editing the gulpfile.js. By default StreamBuilder compiles everything to the /dest folder. You can chage this behavior (as well as the URL of the project) by editing the `paths` vars in the top of gulpfile.js.

StreamBuilder comes bundled with SASS and Nunjucks support. You can change this by removing the gulp-scss modules and installing the css pre-processor and template language of your choice then editing the tasks in gulpfile.js. You can find additional modules at [NPM](https://www.npmjs.com/).

### Goodies
- Out of the box StreamBuilder will create a single page website. Not a very pretty one, but a simple one to get you started.
- Some handy SASS mixins
    - simple-grid() creates a very simple css grid.
    - simple-flex() for vertical/horizontal placement of block elements.
    - remCalc() to control font sizes based on the default rem.

Instructions for the mixins are in the `/src/scss/components/_mixins.scss` file. And examples are included in the `src/scss/app.scss` and `/src/pages/index.njk` files.

#### Getting Help
If you find a bug or want to see a feature, file it in the [issues section](https://github.com/digi-brains/StreamBuilder/issues).