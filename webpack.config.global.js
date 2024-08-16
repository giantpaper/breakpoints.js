const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	output: {
		filename: 'breakpoints.js',
		path: path.resolve(__dirname, 'dist'),
		path: __dirname,
		library: {
			name: "Breakpoints",
			type: "var",
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
}
