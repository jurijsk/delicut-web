import {createTheme, loadTheme, IRawStyle} from 'office-ui-fabric-react';
//import {initializeIcons} from 'office-ui-fabric-react/lib/Icons';

export function initFabricUITheme() {

	//initializeIcons();
	const theme = createTheme({
		palette: {
			themePrimary: '#6d5dd3',
			themeLighterAlt: '#f8f8fd',
			themeLighter: '#e5e2f8',
			themeLight: '#cfc9f2',
			themeTertiary: '#a298e5',
			themeSecondary: '#7c6ed9',
			themeDarkAlt: '#6254be',
			themeDark: '#5347a1',
			themeDarker: '#3d3477',
			neutralLighterAlt: '#f8f8f8',
			neutralLighter: '#f4f4f4',
			neutralLight: '#eaeaea',
			neutralQuaternaryAlt: '#dadada',
			neutralQuaternary: '#d0d0d0',
			neutralTertiaryAlt: '#c8c8c8',
			neutralTertiary: '#bab8b7',
			neutralSecondary: '#a3a2a0',
			neutralPrimaryAlt: '#8d8b8a',
			neutralPrimary: '#323130',
			neutralDark: '#605e5d',
			black: '#494847',
			white: '#ffffff',
		},
		defaultFontStyle: {fontWeight: '400'},
		fonts: {
			medium: {
				fontSize: '18px'
			},
			superLarge: {
				fontSize: '48px',
				lineHeight: '58px'
			},
			xxLarge: {
				fontSize: '48px',
				lineHeight: '60px'
			},
			mega: {
				fontSize: '64px',
				lineHeight: '80px'
			},
		}
	});
	loadTheme(theme);
}