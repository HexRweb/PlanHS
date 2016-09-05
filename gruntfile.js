module.exports = function(grunt) {
	'use strict';

	grunt.initConfig(
	{
		assemble:
		{
			extension:
			{
				options:
				{
					flatten: true,
					partials: ['templates/includes/*.hbs'],
					layoutdir: 'templates',
					layout: 'extension.hbs',
					extension: true,
					mobile: false
				},
				files: [
					{'dist/extension/' : ['src/*.hbs']},
				]
			},
			mobile:
			{
				options:
				{
					flatten: true,
					partials: ['templates/includes/*.hbs'],
					layoutdir: 'templates',
					layout: 'mobile.hbs',
					extension: false,
					mobile: true
				},
				files: [
					{'dist/mobile/' : ['src/*.hbs']},
				]
			}
		},
		htmlmin:
		{
			mobile:
			{
				options:
				{
					collapseWhitespace:true,
					keepClosingSlash: true,
					removeComments:true,
				},
				files:[
				{
					expand: true,
					cwd: 'dist/mobile',
					src: '*.html',
					dest: 'dist/mobile'
				}]
			},
			extension:
			{
				options:
				{
					collapseWhitespace:true,
					keepClosingSlash: true,
					removeComments:true,
				},
				files:[
				{
					expand: true,
					cwd: 'dist/extension',
					src: '*.html',
					dest: 'dist/extension'
				}],
			}
		},
		cssmin:
		{
			mobile:
			{
				files:[{
					expand: true,
					cwd: 'dist/mobile/assets/css',
					src: ["*.css"],
					dest: 'dist/mobile/assets/css',
					ext: '.css'
				}]
			},
			extension:
			{
				files:[{
					expand: true,
					cwd: 'dist/extension/assets/css',
					src: ["*.css"],
					dest: 'dist/extension/assets/css',
					ext: '.css'
				}]
			}
		},
		uglify:
		{
			mobile:
			{
				files:[
				{
					expand:true,
					cwd: 'dist/mobile/assets/js',
					src: ["*.js"],
					dest: 'dist/mobile/assets/js'
				}],
				options:{mangle:false}
			},
			extension:
			{
				files:[
				{
					expand:true,
					cwd: 'dist/extension/assets/js',
					src: ["*.js"],
					dest: 'dist/extension/assets/js'
				}],
				options:{mangle:false}
			}
		},
		copy:
		{
			extension:
			{
				files: [
					{expand: true, cwd: 'src/assets', src: "**", dest: 'dist/extension/assets', nonull: true},
					//{expand: true, cwd: 'src/data', src: "**", dest: 'dist/extension/data', nonull: true},
					{expand: true, cwd: 'src', src: "*.json", dest: 'dist/extension/', nonull: true}
				]
			},
			mobile:
			{
				files: [
					{expand: true, cwd: 'src/assets', src: "**", dest: 'dist/mobile/assets', nonull: true},
					//{expand: true, cwd: 'src/data', src: "**", dest: 'dist/mobile/data', nonull: true},
					{expand: true, cwd: 'src/res', src: "**", dest: 'dist/mobile/res', nonull: true},
					{expand: true, cwd: 'src', src: "config.xml", dest: 'dist/mobile/', nonull: true},
					{expand: true, cwd: 'src', src: "icon.png", dest: 'dist/mobile/', nonull: true}
				]
			}
		}
	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('mobile', ['assemble:mobile','copy:mobile','htmlmin:mobile','cssmin:mobile','uglify:mobile']);
	grunt.registerTask('extension', ['assemble:extension','copy:extension','htmlmin:extension','cssmin:extension','uglify:extension']);

	grunt.registerTask('default', []);
	grunt.registerTask('all', ['assemble:extension','copy:extension','htmlmin:extension','cssmin:extension','uglify:extension','assemble:mobile','copy:mobile','htmlmin:mobile','cssmin:mobile','uglify:mobile']);
};