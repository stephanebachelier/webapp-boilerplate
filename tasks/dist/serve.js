/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'build',
      'open:server',
      'connect:dist:keepalive'
    ]);
  });
};
