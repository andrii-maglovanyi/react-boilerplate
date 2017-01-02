var webpack = require('webpack')
var path = require('path')
var envFile = require('node-env-file')
var HtmlWebpackPlugin = require('html-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
var production = process.env.NODE_ENV === 'production'
var test = process.env.NODE_ENV === 'test'

try {
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e) {
  console.log(e)
}

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!tether/dist/js/tether.min.js',
    'script!bootstrap/dist/js/bootstrap.min.js',
    './app/app.jsx',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: production ? '[name]-[hash].js' : 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      'app/actions',
      'app/api',
      'app/components',
      'app/layout',
      'app/pages',
      'app/reducers',
      'app/store'
    ],
    alias: {
      applicationStyles: 'app/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        CATEGORY: JSON.stringify(process.env.CATEGORY)
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/template.html'
    })
  ],
  externals: {
    jsdom: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/bootstrap/scss')
    ]
  },
  devtool: production ? undefined : '#cheap-module-source-map'
}

if (production) {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}

if (test) {
  module.exports.module.preLoaders.push({
    test: /\.jsx?$/,
    include: path.resolve('app/'),
    loader: 'isparta'
  })
}
