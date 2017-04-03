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
        },

        copy: {
            main: {
                files: [
                    { 
                      expand: true,
                      cwd: 'bower_components/bootstrap-sass/assets/javascripts/bootstrap',
                      src: ['affix.js','transition.js', 'carousel.js'],
                      dest: 'assets/js/bootstrap'
                    }]
            }
        },

        concat: {
            swBuild: {
                src: [
                    'assets/js/bootstrap/affix.js',
                    'assets/js/bootstrap/transition.js',
                    'assets/js/bootstrap/carousel.js',
                    'assets/js/nav.js'
                ],
                dest: 'assets/js/main.js',
            },
        },

        uglify: {
            dist: { 
                files: { 
                    'assets/js/main.min.js': ['assets/js/main.js'] 
                } 
            }
        }

    });
    
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'cssmin', 'uncss', 'imagemin', 'copy', 'concat', 'uglify']);
}
