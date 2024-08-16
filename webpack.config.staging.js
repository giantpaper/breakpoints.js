const path = require('path');
const merge = require('webpack-merge');

module.exports = merge(
	{
		mode: 'production',
		entry: './demo.js',
	},
	require('./webpack.config.global')
)
