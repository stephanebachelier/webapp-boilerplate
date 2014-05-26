/* global module */
'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },
  server: {
    tasks: [
      'handlebars',
      'style',
      'data'
    ]
  },
  build: {
    tasks: [
      'handlebars',
      'style',
      'buildit'
    ]
  },
  lib: {
    tasks: [
      'handlebars',
      'style',
      'requirejs:lib'
    ]
  }
};
