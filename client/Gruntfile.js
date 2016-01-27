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
    },
    sass: {
      dist: {
        options: {
          noCache: true
        },
        files: {
          'public/css/app.css': 'public/scss/app.scss'
        }
      }
    },
    concat: {
      options: {
        separator: '\n\n;/////////////////////////////////////\n\n'
      },
      dist: {
        src: [
          'public/js/app.js',
          'public/js/config.js',
          'public/js/controller.js',
          'public/js/components.js',
          'public/js/pages.js',

          'public/components/**/*.js',
          'public/pages/**/*.js'
        ],
        dest: 'public/release/dev/dist.js'
      }
    },
    watch: {
      scripts: {
        files: ['public/scss/**/*.scss', 'public/**/*.js'],
        tasks: ['sass', 'concat']
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['copy', 'sass', 'concat', 'watch']);
}