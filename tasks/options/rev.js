/*global module*/
'use strict';

module.exports = {
  dist: {
    files: {
      src: [
        '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '/styles/fonts/{,*/}*.*',
      ]
    }
  }
};

