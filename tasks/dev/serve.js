/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'clean:server',
      'handlebars',
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });
};
