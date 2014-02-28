module.exports = {
  build: [
    'clean:dist',
    'concurrent',
    'useminPrepare',
    'requirejs',
    'imagemin',
    'htmlmin',
    'concat',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ],
  default: [
    'lint-code',
    'lint-test',
    'test',
    'build'
  ],
  'lint-code': [
    'jshint:code',
    'jscs:code'
  ],
  'lint-test': [
    'jshint:test',
    'jscs:test'
  ],
  doc: [
    'docco',
    'open:doc',
    'connect:doc:keepalive'
  ]
};
