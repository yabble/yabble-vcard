var vm = require('vm');

module.exports = function(grunt) {
  'use strict';

  var config = {};

  // templates
  config.yate = {
    options: {
      runtime: true,
      postprocess: function(code) {
        return vm.runInNewContext(code + "yr.run('main', {});");
      }
    },
    page: {
      files: {
        'index.html': 'b/index.yate'
      }
    }
  };

  // styles
  config.stylus = {
    options: {
      banner: '/* [Yet Another Yandex Vcard](https://github.com/vitkarpov/yandex-vcard) */'
    },
    files: {
      'css/yacard.css': ['b/**/*.styl']
    }
  };

  config.cssmin = {
    files: {
      'css/yacard.min.css': 'css/yacard.css'
    }
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-yate');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['yate']);
};