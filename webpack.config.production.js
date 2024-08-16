const path = require('path');
const { merge } = require('webpack-merge');

console.log(typeof merge)

module.exports = merge(
	{
		mode: 'production',
		entry: './src/index.js',
	}, require('./webpack.config.global')
)
