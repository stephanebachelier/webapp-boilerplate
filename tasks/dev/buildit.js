/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('buildit', function () {
    grunt.task.run([
      'useminPrepare',
      'requirejs',
      'htmlmin',
      'concat',
      'cssmin',
      'copy:dist',
      'copy:requirejs',
      'replace:requirejs',
      'usemin'
    ]);
  });
};
