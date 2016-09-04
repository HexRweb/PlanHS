module.exports = function(grunt) {
	'use strict';

	grunt.initConfig(
	{
		assemble:
		{
			options:
			{
				flatten: true,
				partials: ['templates/includes/*.hbs'],
				layoutdir: 'templates',
				layout: 'extension.hbs'
			},
			extension:
			{
				files: [
					{'dist/extension/' : ['src/*.hbs']},
					{'dist/extension/extras/' : ['src/extras/*.hbs']}
				]
			},
			mobile:
			{
				files: [
					{'dist/mobile/' : ['src/*.hbs']},
					{'dist/mobile/extras/' : ['src/extras/*.hbs']}
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
						src: 'dist/mobile/*.html',
						dest: '/'
				},
				{
					expand: true,
					src:'dist/mobile/extras/*.html',
					dest:'/'
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
						src: 'dist/extension/*.html',
						dest: '/'
				},
				{
					expand: true,
					src:'dist/extension/extras/*.html',
					dest:'/'
				}],
			}
		},
		copy:
		{
			extension:
			{
				files: [
					{expand: true, cwd: 'src/assets', src: "**", dest: 'dist/extension/assets', nonull: true},
					{expand: true, cwd: 'src/data', src: "**", dest: 'dist/extension/data', nonull: true},
					{expand: true, cwd: 'src', src: "*.json", dest: 'dist/extension/', nonull: true}
				]
			},
			mobile:
			{
				files: [
					{expand: true, cwd: 'src/assets', src: "**", dest: 'dist/mobile/assets', nonull: true},
					{expand: true, cwd: 'src/data', src: "**", dest: 'dist/mobile/data', nonull: true},
					{expand: true, cwd: 'src/res', src: "**", dest: 'dist/mobile/res', nonull: true},
					{expand: true, cwd: 'src', src: "config.xml", dest: 'dist/mobile/', nonull: true},
					{expand: true, cwd: 'src', src: "icon.png", dest: 'dist/mobile/', nonull: true}
				]
			}
		}
	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('mobile', ['assemble:mobile','htmlmin:mobile','copy:mobile']);
	grunt.registerTask('extension', ['assemble:extension','htmlmin:extension','copy:extension']);

	grunt.registerTask('default', []);
	grunt.registerTask('all', ['assemble:mobile','htmlmin:mobile','copy:mobile','assemble:extension','htmlmin:extension','copy:extension']);
};