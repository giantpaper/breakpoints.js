const path = require('path');

module.exports = env => {
	let mode
	if (env.development === true) {
		mode = 'development'
	}
	else {
		mode = 'production'
	}

	return {
		entry: './src/index.js',
		mode: mode,
		output: {
			filename: 'breakpoints.js',
			path: path.resolve(__dirname, 'dist'),
			library: {
				name: "Breakpoints",
				type: "commonjs-static"
			}
		},
	}
};
