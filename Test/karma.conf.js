'use strict';

// Karma configuration
// Generated on Sat Oct 05 2013 22:00:14 GMT+0700 (ICT)

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../../../',


        // frameworks to use
        frameworks: ['jasmine'],

        preprocessors: {
            '**/*.html': ['html2js']
        },

        ngHtml2JsPreprocessor:{
            prependPrefix: '/',
            moduleName: 'Templates'
        },


        // list of files / patterns to load in the browser
        files: [
            'Scripts/angular.js',
            'Scripts/angular-mocks.js',
            'Scripts/angular-cookies.js',
            'Scripts/angular-resource.js',
            'Scripts/angular-sanitize.js',
            'Scripts/lodash.js',
            'Scripts/restangular.js',
            'Scripts/angular-ui-router.js',
            'Scripts/angular-ui-sortable.js',
            'Scripts/angular-ui-bootstrap-tpls.js',
            'angular/advisement/**/*.js',
            'angular/tests/karma/unit/**/*.js',
            'angular/advisement/partials/*.html'
        ],


        // list of files to exclude
        exclude: [
        ],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
