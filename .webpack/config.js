const path = require('path');
const merge = require('webpack-merge');

const config = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'iota.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    }
};

module.exports = env =>
    merge(config, require(`./${env}.config`));