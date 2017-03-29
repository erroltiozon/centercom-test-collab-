'use strict'
module.exports = function(grunt) {
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },

        uncss: {
            dist: {
                file: {
                    'assets/styles/main.css' : ['index.html', 'recipe-dashboard.html', 'article-page.html', 'recipe-details.html', 'sign-in.html']
                }
            }
        },

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
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass', 'cssmin', 'imagemin', 'uncss']);
}
