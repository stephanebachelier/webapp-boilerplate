/*global define*/
'use strict';

define([
  'marionette',
  'backbone',
  'views/main'
], function (Marionette, Backbone, MainView) {

  var app = new Marionette.Application();

  app.addInitializer(function () {
    this.view = new MainView({el: '.hero-unit'});
    this.view.render();
  });

  app.addInitializer(function () {
    Backbone.history.start();
  });

  return app;

});
