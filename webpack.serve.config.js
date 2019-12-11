const {webpackMerge, htmlOverlay, webpackServeConfig, tsOverlay} = require('just-scripts');
var merge = require('webpack-merge');

//1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

//2. create a transformer;
//the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

const tsConfig = tsOverlay({loaderOptions: {getCustomTransformers: () => ({before: [styledComponentsTransformer]})}});
//merge.smart(webpackServeConfig.module, tsConfig.module);

module.exports = webpackMerge(
	webpackServeConfig,
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
