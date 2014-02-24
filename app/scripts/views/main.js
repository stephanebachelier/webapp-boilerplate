/*global define*/
'use strict';

define([
  'backbone',
  'templates'
], function (Backbone, templates) {

  return Backbone.View.extend({
    template: templates.main,

    render: function () {
      this.$el.html(this.template());
      return this;
    }
  });
});
