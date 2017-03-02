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

  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  var awesomeFonts = new Funnel('bower_components/font-awesome', {
    srcDir: '/fonts',
    destDir: '/fonts'
  })


  app.import('bower_components/perfect-scrollbar/css/perfect-scrollbar.css');

  // app.import('vendor/panel.css');
  // var awesomeFonts = new Funnel('bower_components/font-awesome', {
  //   srcDir: '/fonts',
  //   destDir: '/fonts'
  // })

  app.import('bower_components/roboto.css');
  var robotoFonts = new Funnel('bower_components/roboto-webfont-bower', {
    srcDir: '/fonts',
    destDir: '/fonts'
  })


  app.import('bower_components/font-awesome/css/font-awesome.css');

  app.import('bower_components/feather-icons-sass/feather.css');
  var featherFonts = new Funnel('bower_components/feather-icons-sass', {
    srcDir: '/fonts',
    destDir: '/fonts'
  });

  app.import('bower_components/animate.css/animate.css');


  app.import('bower_components/modernizr/modernizr.js');
  app.import('bower_components/jquery/dist/jquery.js');

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/jquery.easing/js/jquery.easing.js');
  //
  app.import('bower_components/fastclick/lib/fastclick.js');
  //
  app.import('bower_components/onScreen/jquery_onScreen.js');
  //
  app.import('bower_components/jquery-countTo/jquery.countTo.js');
  //
  app.import('bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.js');


  app.import('vendor/scripts/ui/ui.js');
  app.import('vendor/scripts/ui/accordion.js');
  app.import('vendor/scripts/ui/animate.js');
  app.import('vendor/scripts/ui/link-transition.js');
  app.import('vendor/scripts/ui/panel-controls.js');
  app.import('vendor/scripts/ui/preloader.js');

  // 这个js有问题
  app.import('vendor/scripts/ui/toggle.js');

  app.import('vendor/scripts/urban-constants.js');
  app.import('vendor/scripts/extentions/lib.js');

  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree([featherFonts, awesomeFonts, robotoFonts]);
};
