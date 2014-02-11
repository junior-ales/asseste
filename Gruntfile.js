module.exports = function(grunt) {
  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: [path.join(__dirname,'public','css','tmp')],
    watch: {
      files: [ 'views/**/*.html', 'sass/**/*.scss', 'public/js/**/*.js', './*.js' ],
      tasks: ['jshint', 'sass', 'clean', 'reload'],
      express: {
        files:  [ 'public/js/**/*.js', './*.js' ],
        tasks:  [ 'express' ],
        options: { spawn: false }
      }
    },
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: {
          'public/css/tmp/asseste.css': path.join(__dirname,'sass','css','asseste.scss')
        }
      }
    },
    jshint: {
      all: ['./*.js', 'public/**/*.js']
    },
    express: {
      dev: {
        options: { script: './start.js' }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask("reload", "reload Chrome on OS X", function() {
    require("child_process").exec("osascript " +
        "-e 'tell application \"Google Chrome\" " +
          "to tell the active tab of its first window' " +
        "-e 'reload' " +
        "-e 'end tell'");
  });

  grunt.registerTask('default', ['jshint', 'sass', 'clean', 'express', 'watch']);
};
