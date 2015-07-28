module.exports = function(grunt) {

	// 1. All configuration goes here
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: [
					'css/scss/*.scss',
				],
				tasks: ['sass:dev'],
				options: {
					spawn: false,
				}
			}
		},

		sass: {
			dev: {
				options: {
					style: 'compact', //nested, expanded, compact, compressed
					sourcemap: false
				},
				files: {
					'css/layout.css': 'css/scss/layout.scss'
				}
			},
			dist: {
				options: {
					style: 'compressed', //nested, expanded, compact, compressed
					sourcemap: false
				},
				files: {
					'css/layout.css': 'css/scss/layout.scss'
				}
			}
		},

		browserSync: {
			dev: {
				bsFiles: {
					src : [
						'css/layout.css',
						'js/**/*.js'
					]

				},
				options: {
					watchTask: true,
					proxy: "LOCALHOST_URL"
				}
			}
		}

	});

	// 2. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-browser-sync');

	// 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['sass:dev','browserSync','watch']);

};