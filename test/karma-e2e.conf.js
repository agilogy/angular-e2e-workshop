module.exports = function(config){
    var port = process.env.PORT || 8080;
    config.set({

    basePath: '../',        

    files : [
        'app.scenario.js',
    ],

    frameworks: ['ng-scenario'],

    plugins : [
      'karma-ng-scenario',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],

    proxies : {
      '/': 'http://localhost:' + port + '/'
    },
    urlRoot: '/_karma_/',

    reporters: ['progress'],

    browsers: ['Chrome'],

    singleRun: true,
    colors: true,

});};