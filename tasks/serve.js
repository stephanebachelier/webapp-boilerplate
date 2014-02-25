/* global module */
'use strict';

module.exports = function (grunt) {
  grunt.registerTask('serve', function (target) {
    grunt.log.writeln('running serve task in mode', target);

    if (target === 'dist') {
      return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
    }

    if (target === 'test') {
      return grunt.task.run([
        'clean:server',
        'handlebars',
        'connect:test',
        'open:test',
        'watch:livereload'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'handlebars',
      'connect:livereload',
      'open:server',
      'watch'
    ]);
  });
};
