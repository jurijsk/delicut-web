const {webpackMerge, htmlOverlay, webpackServeConfig, tsOverlay } = require('just-scripts');
const config = webpackServeConfig;

const merge = require('webpack-merge');
const path = require('path');


//Configuring `styled-components` plugin
//1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

//2. create a transformer;
//the factory additionally accepts an options object which described below

const styledComponentsTransformer = createStyledComponentsTransformer({
	ssr: true,
	displayName: true,
	getDisplayName: (filename, bindingName) => path.basename(filename, path.extname(filename)) + (bindingName ? "-" + bindingName : ""),
	minify: false
});

const tsConfig = tsOverlay({loaderOptions: {getCustomTransformers: () => ({before: [styledComponentsTransformer]})}});
merge.smart(config.module, tsConfig.module);



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
const svgConfig =
{
	module: {
		rules: [{
			test: /\.svg$/,
			use: [
				{loader: '@svgr/webpack', options: {dimensions: false}}, 'url-loader'
			],
		}]
	}
};

module.exports = webpackMerge(
	svgConfig, //order is important because there is another rule for svg in `config`
	config,
	htmlOverlay({
		template: 'public/index.html'
	}),
	{
		// Here you can custom webpack configurations
		output: {
			publicPath: '/'
		}
	}
);