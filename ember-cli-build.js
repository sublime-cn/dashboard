/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.

  app.import('vendor/bootstrap/dist/css/bootstrap.css');
  var awesomeFonts = new Funnel('vendor/font-awesome', {
    srcDir: '/fonts',
    destDir: '/fonts'
  })


  app.import('vendor/perfect-scrollbar/css/perfect-scrollbar.css');
  app.import('vendor/roboto.css');
  app.import('vendor/font-awesome/css/font-awesome.css');

  app.import('vendor/feather-icons-sass/feather.css');
  var featherFonts = new Funnel('vendor/feather-icons-sass', {
    srcDir: '/fonts',
    destDir: '/fonts'
  });

  app.import('vendor/animate.css/animate.css');


  app.import('vendor/modernizr/modernizr.js');
  app.import('vendor/jquery/dist/jquery.js');

  app.import('vendor/bootstrap/dist/js/bootstrap.js');
  app.import('vendor/jquery.easing/js/jquery.easing.js');
  //
  app.import('vendor/fastclick/lib/fastclick.js');
  //
  app.import('vendor/onScreen/jquery_onScreen.js');
  //
  app.import('vendor/jquery-countTo/jquery.countTo.js');
  //
  app.import('vendor/perfect-scrollbar/js/perfect-scrollbar.jquery.js');

  app.import('vendor/my.js')

  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([featherFonts, awesomeFonts]);
  // return app.toTree();
};
