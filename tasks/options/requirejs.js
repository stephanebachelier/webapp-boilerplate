/*global module*/
'use strict';

module.exports = {
  dist: {
    // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
    options: {
      baseUrl: '<%= yeoman.app %>/scripts',
      optimize: 'none',
      paths: {
        'templates': '../../.tmp/scripts/templates',
        'jquery': '../../app/bower_components/jquery/jquery',
        'underscore': '../../app/bower_components/underscore/underscore',
        'backbone': '../../app/bower_components/backbone/backbone'
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
