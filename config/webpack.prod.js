const { default: merge } = require('webpack-merge');
const common = require('./webpack.common');

const prodConfig = {
    mode: 'production',
    output: {
        publicPath: '/rick-and-Morty'
    },
};

module.exports =  merge( common, prodConfig);