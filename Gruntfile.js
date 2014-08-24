var vm = require('vm');
var data = require('./vcard.json');

module.exports = function(grunt) {
  'use strict';

  var config = {};

  // templates
  config.yate = {
    options: {
      runtime: true,
      externals: 'b/_externals.js',
      postprocess: function(code) {
        return vm.runInNewContext(code + "yr.run('main', " + JSON.stringify(data) + ");");
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
    blocks: {
      files: {
        'yacard.min.css': ['b/**/*.styl'],
        'yacard.ie.min.css': ['b/**/*.ie.styl']
      }
    }
  };
  config.autoprefixer = {
    blocks: {
      src: 'yacard.min.css'
    }
  };

  //scripts
  config.browserify = {
    blocks: {
      files: {
        'yacard.min.js': ['b/**/*.js', '!b/_externals.js']
      }
    }
  };

  //watch
  config.watch = {
    files: [
      'b/**/*'
    ],
    tasks: ['yate', 'stylus', 'browserify', 'autoprefixer']
  };

  grunt.initConfig(config);

  grunt.loadNpmTasks('grunt-yate');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['yate', 'stylus', 'browserify', 'autoprefixer', 'watch']);
};