module.exports = {
  build: [
    'clean:dist',
    'concurrent:build'
  ],
  default: [
    'lint-code',
    'lint-test',
    'build'
  ],
  dev: [
    'karma:unit:start',
    'watch'
  ],
  'lint-code': [
    'jshint:code',
    'jscs:code',
    'lintspaces:code'
  ],
  'lint-test': [
    'jshint:test',
    'jscs:test',
    'lintspaces:test'
  ],
  doc: [
    'groc',
    'open:doc',
    'connect:doc:keepalive'
  ]
};
