module.exports = {
	entry: './app/App.jsx',
	output: {
		filename: 'public/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
                query: {
					presets: ["react", "es2015"]
				}
			}
		]
	},
    resolve: {
		extensions: ["", ".js", ".jsx"]
	}
};