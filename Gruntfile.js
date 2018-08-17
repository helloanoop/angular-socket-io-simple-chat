module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'jshint', 'concat']);

   // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n ' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' License : <%= pkg.license %> \n' +
      ' */\n',
    paths: {
      js: ['src/**/*.js'],
      appJs: ['src/client/**/*.js'],
      scss: ['src/client/**/*.scss']
    },
    clean:{
      public : ["public"]
    },
    concat:{
      index: {
        src: ['src/client/index.html'],
        dest: 'public/index.html',
        options: {
          process: true
        }
      },
      js: {
        src: ['<%= paths.appJs %>'],
        dest: 'public/js/app.js',
        options: {
          process: true
        }
      },
      vendorjs:{
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/socket.io-client/dist/socket.io.min.js'
        ],
        dest: 'public/js/vendor.js'
      },
      vendorcss:{
        src: [
          'bower_components/bootstrap-css-only/css/bootstrap.min.css'
        ],
        dest: 'public/css/vendor.css'
      }
    },
    jshint:{
      files:['gruntFile.js', '<%= paths.js %>'],
      options:{
        globalstrict: true,
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        globals:{
          "io"        : true,
          "Date"      : true,
          "require"   : true,
          "__dirname" : true,
          "angular"   : true,
          "console"   : true,
          "document"  : true
        }
      }
    }
  });
};