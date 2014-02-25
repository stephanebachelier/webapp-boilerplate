/*global module*/
'use strict';

module.exports = {
  options: {
    nospawn: true,
    livereload: true
  },
  livereload: {
    options: {
      livereload: '<%= yeoman.livereload %>'
    },
    files: [
      '<%= yeoman.app %>/*.html',
      '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
      '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
      '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
      '<%= yeoman.app %>/scripts/templates/{,*/}*.hbs',
      'test/spec/**/*.js'
    ]
  },
  gruntfile: {
    files: [
      '<%= jshint.gruntfile.src %>'
      //'tasks/{,*/}*.js'
    ],
    tasks: ['jshint:gruntfile'],
  },
  code: {
    files: ['test/spec/**/*.js'],
    tasks: ['lint-code']
  },
  handlebars: {
    files: [
      '<%= yeoman.app %>/scripts/templates/**/*.hbs'
    ],
    tasks: ['handlebars']
  },
  test: {
    files: ['<%= yeoman.app %>/scripts/{,*/}*.js', 'test/spec/**/*.js'],
    tasks: ['lint-code', 'lint-test', 'test:true']
  }
};
