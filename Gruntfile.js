module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    clean: ['bin'],

    dom_munger: {
      main: {
        options: {
          read: {
            selector: 'script.application-src',
            attribute: 'src',
            writeto: 'appJSRefs',
            isPath: true
          }
        }
      }
    },

    less: {
      development: {
        files: {
          'bin/app.css': 'client/src/**/*.less'
        }
      }
    },

    html2js: {
      app: {
        options: {
          base: 'client/src',
          htmlmin: {
            collapseWhtiespace: true
          }
        },
        src: ['client/src/**/*.tpl.html'],
        dest: 'bin/app-templates.js'
      }
    },

    ngAnnotate: {
      compile: {
        files: [{
          src: ['client/src/**/*.js', '!client/src/**/*.spec.js'],
          dest: 'bin',
          expand: true
        }]
      }
    },

    delta: {
      // tpls: {
      //   files: [ 'client/src/**/*.tpl.html'],
      //   tasks: [ 'html2js' ]
      // },

      // js: {
      //   files: [ '<%= dom_munger.data.appJSRefs %>' ],
      //   tasks: [ 'dom_munger', 'jshint:src' ]
      // },

      // index: {
      //   files: [ 'client/index.html' ],
      //   tasks: [ 'dom_munger' ]
      // }

      less: {
        files: ['client/src/**/*.less'],
        tasks: ['less']
      },

      html2js: {
        files: ['client/src/**/*.tpl.html'],
        tasks: ['html2js']
      }
    }

  });

  grunt.registerTask('build', [
    'clean',
    'dom_munger',
    'less',
    'html2js'
    // 'jshint',
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

  grunt.renameTask( 'watch', 'delta' );
  grunt.registerTask( 'watch', ['build', 'delta']);
};
