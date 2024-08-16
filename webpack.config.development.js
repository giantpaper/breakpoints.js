const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(
	{
		mode: 'development',
		entry: './demo.js',
		devServer: {
			port: 3000,
			static: __dirname,
		},
	}, require('./webpack.config.global')
)
