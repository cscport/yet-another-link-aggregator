module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            src: 'node_modules/angular/angular.js',
            dest: 'public/vendor/angular.js'
          },
          {
            src: 'node_modules/angular-ui-router/release/angular-ui-router.js',
            dest: 'public/vendor/angular-ui-router.js'
          }
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy'])
}