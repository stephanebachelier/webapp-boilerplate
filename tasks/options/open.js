/*global module*/
'use strict';

module.exports = {
  server: {
    path: 'http://localhost:<%= connect.options.port %>'
  },
  test: {
    path: 'http://localhost:<%= connect.test.options.port %>'
  },
  doc: {
    path: 'http://localhost:<%= connect.doc.options.port %>/app/scripts/'
  },
};
