const path = require('path');
// webpack needs to be explicitly required
// const webpack = require('webpack')

// NOTE: Needs a fix. For now, styleguide still works without hot-reloading.

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react'],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react'],
            plugins: [
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties"
            ]
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(gif|png|jpg|svg)(\?.*$|$)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name].[ext]',
              publicPath: 'images/'
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //     'process.env.NODE_ENV': JSON.stringify('development')
    // })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
    filename: './js/bundle.js',
    // publicPath:"/build/js/",
    // filename: 'main.bundle.js',
    // publicPath:"/build/",
  },
  // devServer: {
  //   publicPath: 'build/js/main.bundle.js'
  // }
};
