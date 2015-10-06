'use strict';

// Karma configuration
// Generated on Fri Aug 14 2015 12:41:04 GMT+0300 (EEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../..',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'Tests/Frontend/vendor/github/angular/bower-angular@1.4.0/angular.js',
      'Tests/Frontend/vendor/github/angular/bower-angular-mocks@1.4.5/angular-mocks.js',
      'Tests/Frontend/vendor/github/angular-ui/ui-router@0.2.15/angular-ui-router.js',
      'Tests/Frontend/vendor/system.js',
      'Tests/Frontend/lib/DeepFramework.js',
      'Tests/Frontend/mock/lib/DeepFramework.js',
    ],

    // jspm configuration
    jspm: {
      config: 'Tests/Frontend/config.test.js',
      packages: 'Tests/Frontend/vendor/',
      useBundles: false,
      paths: {
        'github:*': 'Tests/Frontend/vendor/github/*.js',
        'npm:*': 'Tests/Frontend/vendor/npm/*.js',
      },
      loadFiles: [
        'Tests/Frontend/angular/**/*.spec.js',
        'Frontend/js/app/angular/index.js',
      ],
      serveFiles: [
        'Frontend/**/*.js',
      ],
    },

    proxies: {
    },

    client: {
      captureConsole: true,
    },

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'Frontend/js/app/angular/**/*.js': ['coverage'],
      'Tests/Frontend/angular/**/*.spec.js': ['babel'],
    },

    babelPreprocessor: {
      options: {
        sourceMap: 'inline',
        modules: 'system',
      },
    },

    plugins: [
      'karma-babel-preprocessor',
      'karma-jasmine',
      'karma-coverage',
      'karma-jspm',
      'karma-phantomjs-launcher',
      'karma-verbose-reporter',
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    //verbose
    //progress
    reporters: ['verbose', 'coverage'],

    coverageReporter: {
      // configure the reporter to use isparta for JavaScript coverage
      // Only on { "karma-coverage": "douglasduteil/karma-coverage#next" }
      instrumenters: { isparta: require('isparta') },
      instrumenter: {
        '**/*.js': 'isparta',
      },
      reporters: [
        {
          type: 'json',
          dir: 'Tests/Frontend/coverage/',
        },
        {
          type: 'lcov',
          dir: 'Tests/Frontend/coverage/',
        },
      ],
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

  });
};
