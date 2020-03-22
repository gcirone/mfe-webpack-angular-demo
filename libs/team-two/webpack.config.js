const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { args, webpack, shared } = require('../../config/webpack-common');

module.exports = merge(webpack, {
  output: {
    publicPath: 'http://localhost:5600/'
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'teamtwo',
      library: { type: 'var', name: 'teamtwo' },
      filename: 'remote-entry.js',
      remotes: {},
      exposes: {
        'team-two.module': './src/+team-two/team-two.module'
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
