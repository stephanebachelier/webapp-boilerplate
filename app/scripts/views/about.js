define([
  'marionette',
  'templates',
  'logger'
],

function (Marionette, templates, logger) {
  'use strict';

  return Marionette.ItemView.extend({
    template: templates.about,

    initialize: function () {
      logger.log('You see the about page');
    }
  });
});
