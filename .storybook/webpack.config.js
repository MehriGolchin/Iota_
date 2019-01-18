// we are using our development webpack configuration for storybook.

const webpack = require('../.webpack/config');
module.exports = webpack('dev');