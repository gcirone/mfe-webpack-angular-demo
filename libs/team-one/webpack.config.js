const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { args, webpack, shared } = require('../../config/webpack-common');

module.exports = merge(webpack, {
  output: {
    publicPath: 'http://localhost:5500/'
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'teamone',
      library: { type: 'var', name: 'teamone' },
      filename: 'remote-entry.js',
      remotes: {},
      exposes: {
        'team-one.module': './src/+team-one/team-one.module'
      },
      shared
    }),

    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './src/main',
      sourceMap: !args.minimize
    })
  ]
});
