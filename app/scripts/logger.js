define([
  'woodman'
],

function (woodman) {
  'use strict';

  // See: http://joshfire.github.io/woodman/config.html
  woodman.load('console');

  // Create a `main` logger called `App`
  // Require logger to use this one
  // It's an example of how it works.
  // See example:
  // https://github.com/joshfire/woodman/blob/master/examples/browser/browser-amd.js
  var logger = woodman.getLogger('App');
  logger.info('Logger initialized!');

  return logger;
});
