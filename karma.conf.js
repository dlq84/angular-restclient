// Karma configuration
// Generated on Tue Dec 23 2014 18:54:24 GMT+0100 (CET)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-resource/angular-resource.js',

            'src/lib/merge.js',
            'src/pojo/endpointInterface.js',
            'src/pojo/endpointAbstract.js',
            'src/pojo/endpoint.js',
            'src/pojo/endpointMock.js',
            'src/pojo/endpointConfig.js',
            'src/angular-restclient.js',
            'src/factory/model.js',
            'src/factory/mock.js',
            'src/factory/validator.js',
            'src/provider/api.js',

            'test/models/user.js',
            'test/models/company.js',
            'test/models/location.js',
            'test/models/role.js',
            'test/models/room.js',
            'test/mocks/users.js',
            'test/*Spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        //preprocessors: {},
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'src/pojo/**/*.js': ['coverage'],
            'src/factory/**/*.js': ['coverage'],
            'src/provider/**/*.js': ['coverage']
        },



        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        //reporters: ['progress'],
        //reporters: ['verbose'],
        //reporters: ['progress', 'coverage'],
        reporters: ['verbose', 'coverage'],

        coverageReporter: {
            // specify a common output directory
            dir: 'reports/coverage',
            reporters: [
                // reporters not supporting the `file` property
                { type: 'html', subdir: 'html' },
                { type: 'text' },
                { type: 'text-summary' },
            ]
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
