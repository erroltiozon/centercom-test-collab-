'use strict'
module.exports = function(grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['assets/styles/scss/**/*.scss'],
                tasks: ['sass', 'cssmin'],
                options: {
                    livereload: true,
                }
            }
        },

        sass: {
            options: {
                sourcemap: true,
            },
            dist: {
                files: {
                    'assets/styles/css/main.css': 'assets/styles/scss/main.scss'
                }
            }
        },

        cssmin: {
            target: {
                files: [{
                  expand: true,
                  cwd: 'assets/styles/css',
                  src: ['*.css', '!*.min.css'],
                  dest: 'assets/styles/css',
                  ext: '.min.css'
                }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin']);
}
