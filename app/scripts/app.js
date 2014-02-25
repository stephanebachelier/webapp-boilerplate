/*global define*/
'use strict';

define([
  'backbone',
  'views/main'
], function (Backbone, MainView) {
  Backbone.history.start();
  new MainView({el: '.hero-unit'}).render();
});
