const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '../'),
  // start crawling dependency tree here
  entry: './index.js',

  // poop out the final result here (what's referenced in index.html, the slug or bundle)
  output: {
    path: path.join(__dirname, '../dist'),
    filename: "compiled.js"
  },
  module: {
    loaders: [
      {
        // if a file matches this
        test: /\.js$/,
        // and isn't one of these
        exclude: /node_modules/,
        // run it through this 'middleware' (many loaders can work against one file)
        loader: 'babel',
        // some options for babel
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}