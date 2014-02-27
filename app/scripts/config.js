/*global require*/
'use strict';

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
    //jquery: '../bower_components/jquery/jquery',
    jquery: '../bower_components/zeptojs/dist/zepto',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    handlebars: '../bower_components/handlebars/handlebars.runtime',
    marionette: '../bower_components/backbone.marionette/lib/core/amd/backbone.marionette',
    'backbone.babysitter': '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter',
    'backbone.wreqr': '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
    superagent: '../bower_components/superagent/superagent',
    fastclick: '../bower_components/fastclick/lib/fastclick'
  },

  deps: ['jquery', 'underscore']
});