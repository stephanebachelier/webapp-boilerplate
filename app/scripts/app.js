/*global define*/
'use strict';

define([
  'marionette',
  'backbone',
  'fastclick',
  'views/main'
], function (Marionette, Backbone, FastClick, MainView) {

  var app = new Marionette.Application();

  app.addInitializer(function () {
    this.view = new MainView({el: '.hero-unit'});
    this.view.render();
  });

  app.addInitializer(function () {
    FastClick.attach(document.body);
  });

  app.addInitializer(function () {
    Backbone.history.start();
  });

  return app;

});
