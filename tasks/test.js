/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('test', function (isConnected) {
    isConnected = Boolean(isConnected);
    var testTasks = [
      'clean:server',
      'handlebars',
      'connect:test',
      'watch:test'
    ];

    if (!isConnected) {
      return grunt.task.run(testTasks);
    }
    else {
      // already connected so not going to connect again, remove the connect:test task
      testTasks.splice(testTasks.indexOf('connect:test'), 1);
      return grunt.task.run(testTasks);
    }
  });
};
