/*global module*/
'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      dest: '<%= yeoman.dist %>',
      src: [
        '*.{ico,txt}',
        '.htaccess',
        'images/{,*/}*.{webp,gif}',
        'styles/fonts/{,*/}*.*',
      ]
    }]
  }
};
