const path = require('path');
const merge = require('webpack-merge');

const config = {
    entry: './src/index.tsx',
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
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    }
};

module.exports = env =>
    merge(config, require(`./${env}.config`));