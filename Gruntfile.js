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
    }
  });

  grunt.registerTask('build', [
    'clean',
    'dom_munger',
    // 'jshint',
    // 'html2js'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};