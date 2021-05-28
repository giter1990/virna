// postcss-loader: "^5.3.0"
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
				include: path.join(__dirname, "src/"),
				use: [
					{loader: "apply-loader"},
					{loader: "pug-loader"}
				]
			},
			{
				test: /\.html$/i,
				use: [
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
					},			
					"css-loader",
					"resolve-url-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: ['autoprefixer']
							},
							sourceMap: true
						}
					},
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
				test: /\.(svg|xml|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							esModule: false
						}
					}
				]
			},
			{
				test: /\.(png)$/,
				include: [
					path.resolve(__dirname, "/")
				],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							esModule: false
						}
					}
				]
			},
			{
				include: [
					path.resolve(__dirname, 'src/img'),
				],
				use: [
					{
						loader: "img-optimize-loader",
						options: {
							name: "[name].[ext]",
							esModule: false,
							outputPath: "img",
							compress: {
								webp: true
							},
							inline: {
								limit: false
							}
						}
					}
				]
			}
		]
	},
	node: {
		fs: 'empty'
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "./public/"),
		filename: "bundle.js"
	},
	devServer: {
		open: true,
		watchContentBase: true,
		contentBase: path.join(__dirname, "./public/"),
		writeToDisk: (filePath) => {
			return /\.(html|css|js)$/.test(filePath);
		},
		port: 3000,
		publicPath: "http://localhost:3000/",
		hotOnly: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/index.pug"
		}),
		new MiniCssExtractPlugin({
			filename: "style.min.css"
		}),
		new WebpackMildCompile(),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["main.*.hot-update.js"],
			cleanStaleWebpackAssets: false
		})
	]
};