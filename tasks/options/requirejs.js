/*global module*/
'use strict';

module.exports = {
  dist: {
    // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    options: {
      baseUrl: '<%= yeoman.app %>/scripts',
      optimize: 'none',
      out: '<%= yeoman.dist %>/scripts/main.js',
      name: 'main',
      mainConfigFile: '<%= yeoman.app %>/scripts/config.js',
      paths: {
        templates: '../../.tmp/scripts/templates'
      },
      // TODO: Figure out how to make sourcemaps work with grunt-usemin
      // https://github.com/yeoman/grunt-usemin/issues/30
      //generateSourceMaps: true,
      // required to support SourceMaps
      // http://requirejs.org/docs/errors.html#sourcemapcomments
      preserveLicenseComments: false,
      useStrict: true,
      wrap: true
      //uglify2: {} // https://github.com/mishoo/UglifyJS2
    }
  }
};
