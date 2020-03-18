const  { argv } = require('yargs');

const production = argv.mode === 'production';
const minimize = argv.optimizeMinimize || false;

module.exports = {
  args: { production, minimize },
  shared: [
    '@angular/core',
    '@angular/router',
    '@angular/common',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    'rxjs',
    'rxjs/operators',
    'tslib',
    'zone.js',
  ],
  webpack: {
    entry: './src/index',
    mode: 'development',
    devtool: !minimize ? 'source-map' : false,
    profile: false,
    cache: false,
    output: { crossOriginLoading: false },
    optimization: { minimize },
    performance: { hints: false },
    resolve: {
      symlinks: true,
      extensions: ['.ts', '.js', '.json'],
      mainFields: ['browser', 'module', 'main']
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: '@ngtools/webpack'
        }
      ]
    }
  }
};
