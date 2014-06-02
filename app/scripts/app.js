define([
  'marionette',
  'backbone',
  'fingerblast',
  'controllers/nav',
  'routers/router'
],

function (Marionette, Backbone, FingerBlast, NavController, Router) {
  'use strict';

  var fingerBlast;

  return function (options) {
    var app = new Marionette.Application();

    app.addRegions({layout: options.el});

    app.addInitializer(function () {
      this.router = new Router({
        controller: new NavController({region: app.layout})
      });
    });

    app.addInitializer(function () {
      if (window.ontouchstart === undefined) {
        fingerBlast = new FingerBlast(document.body);
      }
    });

    app.addInitializer(function () {
      Backbone.history.start();
    });

    return app;
  };

});
