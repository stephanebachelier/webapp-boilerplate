/* global requirejs */
var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app/scripts',

  shim: {
    // zepto
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: [
        'underscore',
        'jquery'
      ],
      exports: 'Backbone'
    },
    marionette: {
      deps: ['backbone', 'backbone.babysitter', 'backbone.wreqr'],
      exports: 'Backbone.Marionette'
    },
    'backbone.babysitter': {
      deps: ['underscore', 'backbone'],
      exports: 'Backbone.BabySitter'
    },
    'backbone.wreqr': {
      deps: ['underscore', 'backbone'],
      exports: 'Backbone.Wreqr'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  },
  paths: {
    templates: '../../.tmp/scripts/templates',
    jquery: '../bower_components/zeptojs/dist/zepto',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    handlebars: '../bower_components/handlebars/handlebars.runtime',
    marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.babysitter': '../../app/bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.wreqr': '../../app/bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
    superagent: '../../app/bower_components/superagent/superagent',
    fastclick: '../bower_components/fastclick/lib/fastclick',
    woodman: '../../app/bower_components/woodman/dist/woodman-browser-amd',
    validator: '../../app/bower_components/validator.js/validator',
    text: '../bower_components/requirejs-text/text',
    json: '../bower_components/requirejs-plugins/src/json'
  },

  // ask Require.js to load these files (all our tests)
  //deps: tests.concat(['jquery', 'underscore']),
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
