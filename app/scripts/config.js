'use strict';

var locale;

require.config({
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
    }
  },
  paths: {
    jquery: '../bower_components/zeptojs/dist/zepto',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    'handlebars.runtime': '../bower_components/handlebars/handlebars.runtime.amd',
    handlebars: 'vendor/handlebars',
    marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
    syphon: '../bower_components/backbone.syphon/lib/amd/backbone.syphon',
    superagent: '../bower_components/superagent/superagent',
    text: '../bower_components/requirejs-text/text',
    json: '../bower_components/requirejs-plugins/src/json',
    replace: '../bower_components/require.replace/require.replace',
    fastclick: '../bower_components/fastclick/lib/fastclick'
  },

  config: {
    replace: {
      // Replace `nls` with the locale of the navigator
      // It will be used to find the right `i18n.json` translation file.
      pattern: 'nls',
      value: function () {
        if (locale) {
          return locale;
        }
        var parts = window.location.search.match(/([^?=&]+)(=([^&]*))?/g);
        for (var i in parts) {
          var tokens = parts[i].split('=');
          if (tokens[0] === 'lang') {
            locale = tokens[1];
            return locale;
          }
        }
        var language = window.navigator.language || window.navigator.userLanguage;
        locale = language.substr(0, 2) || 'en';
        return locale;
      }
    }
  },

  deps: ['jquery', 'underscore']
});
