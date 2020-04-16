const {webpackMerge, basicWebpackServeConfig, htmlOverlay, webpackServeConfig, tsOverlay, fileOverlay, stylesOverlay } = require('just-scripts');

const mode = basicWebpackServeConfig.mode;
const isProduction = mode === 'production'; 


const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//const stylesConfig = stylesOverlay();

/*Configuring `styled-components` plugin
https://github.com/Igorbek/typescript-plugin-styled-components
1. import default from the plugin module */
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
/* 2. create a transformer;
the factory additionally accepts an options object which described below
Also see 'Better debugging' section: https://styled-components.com/docs/tooling
*/
const styledComponentsTransformer = createStyledComponentsTransformer({
	//pure: false,
	ssr: true,
	displayName: true,
	//getDisplayName: (filename, bindingName) => path.basename(filename, path.extname(filename)) + (bindingName ? "-" + bindingName : ""),
	minify: false
});

//Add styled components plugin and 
const tsConfig = tsOverlay({loaderOptions: { 
	// disable type checker - we will use it in fork plugin
	transpileOnly: true,
	getCustomTransformers: () => ({before: [styledComponentsTransformer]})
}});

//merge.smart(config.module, tsConfig.module);

//Delegate ESLinting to fork plugin (https://github.com/TypeStrong/fork-ts-checker-webpack-plugin)
tsConfig.plugins[0].options.eslint  = true;
tsConfig.plugins[0].eslint = true;

const config = merge(basicWebpackServeConfig, styleConfig(), tsConfig, fileOverlay());

//Loads svg files either as url or as react componenent:
//Allows 2 following use case scenarious:
/* 
import url { ReactComponent as Image } from 'path/image.svg';
const App = () => (
	<div>
		<img src={imageUrl} alt="" />
		<Image />
	</div>
)
*/
//Requires `yarn add @svgr/webpack url-loader`
//more here: https://www.pluralsight.com/guides/how-to-load-svg-with-react-and-webpack
const svg =
{
	module: {
		rules: [{
			test: /\.svg$/i,
			use: [
				{loader: '@svgr/webpack', options: {dimensions: false}}, 'url-loader'
			],
		}]
	}
};

config.devServer = {
	//port: 8083,
	//public: 'http://dd861ef5.eu.ngrok.io',
	//this should be your curent IP address in local network to make website available in your local network
	host: '192.168.1.136',
	//disableHostCheck: true
}


module.exports = function cookConfig(env, argv) {
	config.plugins.push(new webpack.WatchIgnorePlugin([/\.s?css\.d\.ts$/]));
	config.plugins.push(new CleanWebpackPlugin());
	config.plugins.push(new webpack.WatchIgnorePlugin([/\.s?css\.d\.ts$/]));
	config.plugins.push(new webpack.DefinePlugin({
		//setting node_env directly because stupid just's start does not pass a shit down the execution chain unlike its build script
		'process.env.NODE_ENV': JSON.stringify(mode),
	}));
	config.plugins.push(new CopyPlugin(
		[
			{from: 'public'}
		]
	));

	let html = htmlOverlay({
		template: 'public/index.html',
		production: isProduction,
		gmtContainerId: 'GTM-PDRWR5V',
		meta: {
			'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
			'theme-color': '#94E5FF'
		}
	});

	return webpackMerge(
		svg, //order is important because there is another rule for svg in `config`
		config,
		html,
		{
			// Here you can custom webpack configurations
			output: {
				publicPath: '/'
			}
		}
	);
}

console.log("done");

function styleConfig(){
	return {
		module: {
			rules: [
				{
					test: /\.s?css$/i,
					use: [
						"style-loader",
						{
							loader: "@teamsupercell/typings-for-css-modules-loader",
							options: {
								// pass all the options for `css-loader` to `css-loader`, eg.
							}
						},
						{
							loader: "css-loader",
							options: {
								modules: {
									mode: "local",
									localIdentName: "[name]_[local]_[hash:base64:5]"
								},
								localsConvention: 'camelCaseOnly',
							}
						},
						// { //not used for now
						// 	"loader": "postcss-loader",
						// 	options: {options: {}}
						// },
						"sass-loader",
					]
				}
			]
		}
	};
}
