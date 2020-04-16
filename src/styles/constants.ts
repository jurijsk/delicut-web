import {ScreenWidthMinUhfMobile, ScreenWidthMinXLarge} from '@uifabric/styling';


// General use padding for consistency.
export const appPaddingSm = '28px';
export const appPaddingMd = '40px';

export const appPadding = {
	small: appPaddingSm,
	medium: appPaddingMd,
};

export const contentWidth = `1536px`;

export const ScreenWidthMaxUhfMobile = ScreenWidthMinUhfMobile - 0.001;
export const ScreenWidthMaxXLarge = ScreenWidthMinXLarge - 0.001;


const screenWidthMaxSmallDesktop = 860;
const screenWidthMaxMedium = 690;
const screenWidthMaxMobile = 420;

export const mediaQuery = {
	maxMobile: `@media only screen and (max-width: ${ScreenWidthMaxUhfMobile}px)`,
	maxLarge: `@media only screen and (max-width: ${ScreenWidthMaxXLarge}px)`,
	smallDesktop: `@media only screen and (max-width: ${screenWidthMaxSmallDesktop}px)`,
	medium: `@media only screen and (max-width: ${screenWidthMaxMedium}px)`,
	mobile: `@media only screen and (max-width: ${screenWidthMaxMobile}px)`,
};