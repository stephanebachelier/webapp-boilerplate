# RequireJS Marionette Boilerplate

## Introduction

> This project combines the application skeleton of a typical **[Marionette](http://marionettejs.com/)** web app with **[RequireJS](http://requirejs.org/)** for modularized components. Coupled with the power of **[GruntJS](gruntjs.com)** task runner for development!

It's a simple boilerplate to ease start of a SPA based on some frameworks/librairies often used.

Yeoman generators are great but IMHO not sufficient for an everyday developer. When you're building lots of SPA you're already doing the same things to setup a project. There are a lots of generators on the wild so I decided to create this boilerplate.

## Included JavaScript libraries
 * [Backbone.js](http://backbonejs.org/): Base structure for SPA
 * [Marionette.js](http://marionettejs.com/): Application structure for Backbone Apps
 * [Backbone.babysitter](https://github.com/marionettejs/backbone.babysitter): Manage Backbone Views, dependancies of **Marionette**
 * [Backbone.wreqr](https://github.com/marionettejs/backbone.wreqr): Event aggregator, dependancies of **Marionette**
 * [Require.js](http://requirejs.org/): Browser module loader
 * [Zepto.js](http://zeptojs.com/): replace **jQuery**, with a custom build to select only what's needed.
 * [Underscore.js](http://underscorejs.org/): Will be replaced by **lodash** soon.
 * [Handlebars](http://handlebarsjs.com/): Templates made easy
 * [superagent](http://visionmedia.github.io/superagent/): A proper implementation to make HTTP request.
 * [fastclick](https://github.com/ftlabs/fastclick): To remove ~300ms delay on click (mobile)
 * [woodman](http://joshfire.github.io/woodman/): Flexible JavaScript logger utility based on log4j


## Installation / How-to

First of all, you'll need **[nodejs](http://nodejs.org/)**. Then run these commands:

* `$ git clone git@github.com:stephanebachelier/webapp-boilerplate.git`
* `$ cd webapp-boilerplate`
* `$ npm run-script preinstall`
* `$ npm install`
* `$ bower install`
* `$ npm run-script build-zepto`

And voilà! It should be working correctly, run : `$ grunt serve` and you'll see a page with a little introduction of the Boilerplate.

**Happy coding guys!**

## Grunt? What does it do?

Grunt is used in a lot of tasks here, you can find theses tasks well separated in the folder `/tasks`.

You can find the list of the aliases in `/tasks/aliases.js`

### $ grunt serve

It compiles the files, serve them on `localhost:9000` and opens your default browser to this url.

It will watch the files in `app/scripts`, he will execute these tasks :

* [jscs](https://www.npmjs.org/package/jscs): JavaScript Style Checker
* [jshint](https://www.npmjs.org/package/grunt-contrib-jshint): Detect potential errors in your JavaScript code
* [jsonlint](https://www.npmjs.org/package/grunt-jsonlint): Lint your `.json` files
* [csslint](https://www.npmjs.org/package/grunt-contrib-csslint): Lint you `.css` files
* [compass](https://www.npmjs.org/package/grunt-contrib-compass): Compile your `.scss/.sass` files
* [handlebars](https://www.npmjs.org/package/grunt-contrib-handlebars): Precompile Handlebars template
* [lintspaces](https://www.npmjs.org/package/grunt-lintspaces): Check that your code fits to `.editorconfig`

And then reload your page for you if everything is OK! :)

### $ grunt doc

Generates a doc using **[groc](https://github.com/nevir/groc)** and opens it in your default browser.

> Groc takes your documented code, and in an admission that people aren't machines, generates documentation that follows the spirit of literate programming.

### $ grunt changelog

Generate a changelog using git metadata, based on [these commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit). View this [CONVENTIONS.md](https://github.com/ajoslin/conventional-changelog/blob/master/CONVENTIONS.md) for a synopsis of the conventions with commit examples.

Here's some output examples:
* https://github.com/btford/grunt-conventional-changelog/blob/master/CHANGELOG.md
* https://github.com/karma-runner/karma/blob/master/CHANGELOG.md

### $ grunt style

Compile your `.scss/.sass` files and lint them, report errors if any.

### $ grunt lint-code

Lint your `.js` files, report errors if any.

## Tests

**[Karma](http://karma-runner.github.io/)** test runner is used for tests. Configuration is inspired by [Kim's example project](https://github.com/kjbekkelund/karma-requirejs), you should checkout the `README.md` to learn more about the configuation.

> The main goal for Karma is to bring a productive testing environment to developers. The environment being one where they don't have to set up loads of configurations, but rather a place where developers can just write the code and get instant feedback from their tests.

To run the tests, you can either use `$ npm test` or `$ karma start`

Tests files are located in `/test/spec`, the library used for tests are :

* [karma](http://karma-runner.github.io/): A test runner that fits all our needs
* [mocha](http://visionmedia.github.io/mocha/): Making asynchronous testing simple and fun
* [sinon](http://sinonjs.org/): Standalone test spies, stubs and mocks for JavaScript
* [chai](http://chaijs.com/): BDD / TDD assertion library

There are some tests example, check out them and test your code!

## Notes

### Commons errors :

* If it fails at `$ npm run-script preinstall` try to run it with sudo: `$ sudo npm run-script preinstall`

### About `yo` generators :

You can always use `yo` generators while using this boilerplate. While you don't try to bootstrap an app with any generator, you should be fine.

```
$ yo backbone:model mymodel
create app/scripts/models/mymodel.js
```

### Other :

* The `$ grunt build` doesn't works atm.
* Not tested on Windows!
