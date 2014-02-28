define([
  'marionette',
  'backbone',
  'fastclick',
  'views/main'
],

function (Marionette, Backbone, FastClick, MainView) {
  'use strict';

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
