module.exports = {
  options: {
    editorconfig: '.editorconfig'
  },
  gruntfile: {
    src: ['Gruntfile.js']
  },
  code: {
    src: ['<%= yeoman.app %>/scripts/{,*/}*.js']
  },
  test: {
    src: ['test/spec/{,*/}*.js']
  }
};
