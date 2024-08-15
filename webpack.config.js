const path = require('path');

module.exports = env => {
	let config = {
		entry: './src/index.js',
		mode: mode,
		output: {
			filename: 'breakpoints.js',
			path: path.resolve(__dirname, 'dist'),
			library: {
				name: "Breakpoints",
				type: "umd",
			}
		},
	}
	let mode = env.development ? 'development' : 'production'

	if (mode === 'development') {
		config.devServer = {
			port: 3000,
			contentBase: __dirname + '/build',
			inline: true
		}
	}

	return config
};
