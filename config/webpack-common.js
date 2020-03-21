const  { join } = require('path');
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
    'site-core'
  ],
  webpack: {
    entry: './src/index',
    mode: 'development',
    devtool: minimize ? false : 'source-map',
    profile: false,
    cache: false,
    output: {
      crossOriginLoading: false
    },
    optimization: {
      minimize,
      moduleIds: minimize ? 'natural' : 'named'
    },
    performance: {
      hints: false
    },
    resolve: {
      symlinks: true,
      extensions: ['.ts', '.js', '.json'],
      mainFields: ['browser', 'module', 'main'],
      alias: {
        'site-core': join(__dirname, '../libs/site-core/src/main.ts'),
      }
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
