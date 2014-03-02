require([
  'config',
  'index'
],

function (Config, Module) {
  'use strict';

  var app = new Module({el: '.hero-unit'});
  app.start();
});
