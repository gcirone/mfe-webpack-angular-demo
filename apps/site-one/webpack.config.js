const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const { AngularCompilerPlugin } = require('@ngtools/webpack');
const { args, webpack, shared } = require('../../webpack.config');

module.exports = merge(webpack, {
  output: {
    publicPath: 'http://localhost:4200/',
  },

  plugins: [
    new CopyPlugin([{ from: 'public', to: '.' }]),

    new ModuleFederationPlugin({
      name: 'site',
      library: { type: 'var', name: 'site' },
      filename: 'remote-entry.js',
      remotes: {
        teamone: 'teamone',
        teamtwo: 'teamtwo',
        teamthree: 'teamthree'
      },
      exposes: {},
      shared
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
      chunks: ['polyfills', 'main'],
      minify: args.minimize
    }),

    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './src/app/app.module#AppModule',
      sourceMap: !args.minimize
    })
  ]
});
