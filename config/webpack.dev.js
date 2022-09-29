const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const devConfig = {
    mode: 'development',
    output: {
      publicPath: '/'
  },
    devServer: {
        static: {
          directory: path.join(__dirname, '../dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true,
      },
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ]
};

module.exports =  merge( common, devConfig);