const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { args, webpack, shared } = require('../../config/webpack-common');
const merge = require('webpack-merge');

module.exports = merge(webpack, {
  output: {
    publicPath: 'http://localhost:5500/'
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'tone',
      library: { type: 'var', name: 'tone' },
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
