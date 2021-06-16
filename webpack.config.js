// postcss-loader: "^5.3.0"
// webpack-dev-server: "^3.1.8"

const path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
	MiniCssExtractPlugin = require("mini-css-extract-plugin"),
	HtmlWebpackHotPlugin = require('html-webpack-hot-plugin'),
	htmlHotPlugin = new HtmlWebpackHotPlugin({
		hot: true
	}),
	WebpackMildCompile = require('webpack-mild-compile').Plugin,
	{ CleanWebpackPlugin } = require('clean-webpack-plugin'),
	mixer = require('svg-mixer'),
	TerserPlugin = require("terser-webpack-plugin"),
	CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
	
mixer(["src/icons/checkmark/**/*.svg", "src/icons/header/**/*.svg", "src/icons/language/**/*.svg", "src/icons/promo-bg/**/*.svg", "src/icons/social/**/*.svg"], { spriteType: "stack", prettify: true }).then(result => result.write("public/sprite.svg"));

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
								plugins: ["autoprefixer"]
							},
							sourceMap: true
						}
					},
					{
						loader: "sass-loader",
						options: {
							sassOptions: {
								file: "./src/sass/style.sass",
								indentType: "tab"
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
				test: /\.(xml|gif)$/i,
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
					path.resolve(__dirname, "src/icons/checkmark"),
					path.resolve(__dirname, "src/icons/header"),
					path.resolve(__dirname, "src/icons/language"),
					path.resolve(__dirname, "src/icons/promo-bg"),
					path.resolve(__dirname, "src/icons/social")
				],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./sprite/",
							esModule: false
						}
					}
				]
			},
			{
				include: [
					path.resolve(__dirname, "src/icons/catalog"),
					path.resolve(__dirname, "src/icons/promo-img"),
					path.resolve(__dirname, "src/icons/slider")
				],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./icons/",
							esModule: false
						}
					}
				]
			},
			{
				test: /\.svg$/,
				include: [
					path.resolve(__dirname, "tiles")
				],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./tiles/",
							esModule: false
						}
					}
				]
			},
			{
				include: [
					path.resolve(__dirname, "favicon")
				],
				use: [
					{
						loader: "file-loader",
						options: {
							name: "[name].[ext]",
							outputPath: "./favicon/",
							esModule: false
						}
					}
				]
			},
			{
				include: [
					path.resolve(__dirname, "src/img"),
				],
				use: [
					{
						loader: "img-optimize-loader",
						options: {
							name: "[name].[ext]",
							esModule: false,
							outputPath: "img",
							compress: {
								mode: "lossless",
								optipng: false,
								pngquant: false,
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
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				test: /\.js$/,
				extractComments: false
			}),
			new CssMinimizerPlugin({
				test: /\.css$/
			})
		]
	},
	node: {
		fs: 'empty'
	},
	resolve: { extensions: ["*", ".js", ".jsx"] },
	output: {
		path: path.resolve(__dirname, "./public/"),
		filename: "bundle.min.js",
		chunkFilename: "[id].min.js"
	},
	devServer: {
		open: true,
		watchContentBase: true,
		contentBase: path.join(__dirname, "./public/"),
		compress: true,
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