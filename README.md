![](https://img.shields.io/github/release/digi-brains/StreamBuilder.svg?style=flat-square)
![](https://img.shields.io/github/license/digi-brains/StreamBuilder.svg?style=flat-square)
![](https://img.shields.io/github/issues/digi-brains/StreamBuilder.svg?style=flat-square)

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

[Documentation](https://digi-brains.github.io/StreamBuilder/)