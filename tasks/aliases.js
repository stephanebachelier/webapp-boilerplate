module.exports = {
  build: [
    'clean:dist',
    'concurrent',
    'useminPrepare',
    'requirejs',
    'imagemin',
    'htmlmin',
    'cssmin',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ],
  default: [
    'lint-code',
    'lint-test',
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
    'groc',
    'open:doc',
    'connect:doc:keepalive'
  ]
};
