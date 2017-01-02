const webpackConfig = require('./webpack.config.js')

module.exports = function(config) {
  config.set({
    browsers: ['Chromium'],
    singleRun: true,
    frameworks: ['mocha'],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack']
    },
    reporters: ['mocha', 'coverage'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      reporters: [
        {
          type: 'text-summary',
        },
        {
          type : 'html',
          dir : 'coverage/'
        }
      ]
    }
  })
}
