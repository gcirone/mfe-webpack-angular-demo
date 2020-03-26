const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { args, webpack, shared } = require('../../webpack.config');

module.exports = merge(webpack, {
  output: {
    publicPath: 'http://localhost:5700/'
  },

  plugins: [
    new ModuleFederationPlugin({
      name: 'teamthree',
      library: { type: 'var', name: 'teamthree' },
      filename: 'remote-entry.js',
      remotes: {},
      exposes: {
        'payment.module': './src/payment/payment.module'
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
