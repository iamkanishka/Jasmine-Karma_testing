module.exports = function (config) {
    config.set({
      frameworks: ['jasmine'],
      preprecessors:{'*.js':'coverage'},
      files: ['./CustomMatcher.js', '*.js', '*.spec.js'],
      plugins: ['karma-jasmine','karma-chrome-launcher', 'karma-coverage'],
      reporters: ['dots','coverage'],
      colors: true,
      singleRun: false,
      browsers:['chrome'],
      coverageReporter:{
        type:'html',
        dir:'converage/'
      }
    });
  };