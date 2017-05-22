const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname),
  entry: './scripts/inject.js',
  output: {
    path: path.join(__dirname, 'dest'),
    filename: 'inject.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './assets/icons', to: 'icons' },
      { from: './assets/manifest.json', to: 'manifest.json' },
      { from: './scripts/background.js', to: 'background.js' },
    ])
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
};
