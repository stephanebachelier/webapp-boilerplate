/* global module */
'use strict';

module.exports = {
  options: {
    logConcurrentOutput: true
  },
  server: {
    tasks: [
      'handlebars',
      'style'
    ]
  },
  build: {
    tasks: [
      'handlebars',
      'style',
      'buildit'
    ]
  }
};
