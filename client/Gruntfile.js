module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            src: 'node_modules/angular/angular.js',
            dest: 'public/vendor/angular.js'
          }
        ]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy'])
}