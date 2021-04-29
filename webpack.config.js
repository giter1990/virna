// "webpack-dev-server": "^3.1.8"

const path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	IconPlugin = require('svg-sprite-webpack-plugin').plugin,
	iconPlugin = new IconPlugin('icons-[hash].svg'),
	HtmlWebpackHotPlugin = require('html-webpack-hot-plugin'),
	htmlHotPlugin = new HtmlWebpackHotPlugin({
		hot: true
	}),
	WebpackMildCompile = require('webpack-mild-compile').Plugin,
	{ CleanWebpackPlugin } = require('clean-webpack-plugin');
	
let devServer;
	
module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		exprContextCritical: false,
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.(pug)$/,
				include: path.join(__dirname, "src/pug"),
				use: [
					{loader: "apply-loader"},
					{loader: "pug-loader"}
				]
			},
			{
				test: /\.html$/i,
				use: [
					// {
						// loader: "file-loader",
						// options: {
							// name: "[name].[ext]"
						// }
					// },
					{
						loader: "html-loader"
					}
				]
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
						// options: {
							// publicPath: "./public/"
						// }
					},			
					"css-loader",
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								file: "./src/sass/style.sass",
								indentType: "tab",
								outputStyle: "expanded"
							}
						}
					}
				]
			},
			{
				test: /\.woff$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./fonts/",
							esModule: false
						}
					}
				]
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]"
						}
					}
				]
			},
			{
				test: /\.(svg|jpg)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							esModule: false
						}
					}
				]
			}
			// {
				// test: /\.svg$/,
				// use: [
					// process.env.NODE_ENV !== "production"
						// ? "svg-sprite-loader"
						// : iconPlugin.extract()
				// ]
			// }
		]
	},
	node: {
		fs: 'empty'
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "./public/"),
		// publicPath: "./public/",
		filename: "bundle.js"
	},
	// optimization: {
		// sideEffects: false
	// },
	devServer: {
		// after: function(app, server, compiler) {
			// compiler.hooks.done.tapAsync('DelayedLiveReloadPlugin',
				// async (compilation, callback) => {
					// // Only look out for changed html files.
					// const watchFiles = ['.html'];
					// const changedFiles = Object.keys(
					// compiler.watchFileSystem.watcher.mtimes
					// );
					
					// // Send 'content-changed' socket message to manually tigger liveReload.
					// if (
					// this.hot &&
					// changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
					// ) {
						// server.sockWrite(server.sockets, "content-changed");
					// }

					// callback();
				// }
			// );
		// },
		open: true,
		watchContentBase: true,
		contentBase: path.join(__dirname, "./public/"),
		writeToDisk: (filePath) => {
			return /\.(html|css|js)$/.test(filePath);
		},
		// writeToDisk: true,
		port: 3000,
		publicPath: "http://localhost:3000/",
		hotOnly: true
		// liveReload: false
		// before(app, server) {
			// htmlHotPlugin.setDevServer(server)
		// },
		// before(app, server) {
			// devServer = server;
		// },
		// after: function(app, server) {
			// server._watch("./public/*.html");
		// }
		// setup: function(compiler, server) {
			// const watchFiles = ['.html', '.hbs'];
			// const changedFiles = Object.keys(compiler.watchFileSystem.watcher.mtimes);

			// if (
			// this.hot && 
			// changedFiles.some(filePath => watchFiles.includes(path.parse(filePath).ext))
			// ) {
				// server.sockWrite(server.sockets, "content-changed");
			// }
		// }
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/pug/index.pug"
		}),
		new HtmlWebpackPlugin({
			filename: "catalog.html",
			template: "src/pug/catalog.pug"
		}),
		// reloadHtml,
		// new HtmlWebpackHotPlugin({
			// hot: true
		// }),
		new MiniCssExtractPlugin({
			filename: "style.min.css"
		}),
		// iconPlugin,
		new WebpackMildCompile(),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["main.*.hot-update.js"],
			cleanStaleWebpackAssets: false
		})
	]
};

// function reloadHtml() {
	// const cache = {};
	// const plugin = {name: 'CustomHtmlReloadPlugin'};
	
	// this.hooks.compilation.tap(plugin, compilation => {
		// compilation.hooks.htmlWebpackPluginAfterEmit.tap(plugin, data => {
			// const orig = cache[data.outputName];
			// const html = data.html.source();
			
			// // plugin seems to emit on any unrelated change?
			// if (orig && orig !== html) {
				// devServer.sockWrite(devServer.sockets, 'content-changed');
			// }
			// cache[data.outputName] = html;
		// });
	// });
// }