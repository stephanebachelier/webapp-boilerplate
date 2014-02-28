define([
  'marionette',
  'views/main'
],

function (Marionette, MainView) {
  'use strict';

  var NavController = Marionette.Controller.extend({
    initialize: function (options) {
      this.region = options.region;
    },

    home: function () {
      this.region.show(new MainView());
    }
  });

  return NavController;
});