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

const screenXXL = 1680;
const screenXL = 1460;
const screenL = 1280;
const screenM = 1024;
const screenS = 960;
const screenXS = 690;
const screenXXS = 420;

const contentMax = 1536;
const contentXXL = 1336;
const contentXL = 1136;
const contentL = 960;

const screenWidthMaxSmallDesktop = 860;
const screenWidthMaxMedium = 690;

export const contentSizes = {
	contentMax: contentMax+'px',
	contentXXL: contentXXL+'px',
	contentXL: contentXL+'px',
	contentL: contentL+'px',
};

export const mediaQueries = {
	maxMobile: `@media only screen and (max-width: ${ScreenWidthMaxUhfMobile}px)`,
	maxLarge: `@media only screen and (max-width: ${ScreenWidthMaxXLarge}px)`,
	smallDesktop: `@media only screen and (max-width: ${screenWidthMaxSmallDesktop}px)`,

	screenXXL: `@media only screen and (max-width: ${screenXXL}px)`,
	screenXL: `@media only screen and (max-width: ${screenXL}px)`,
	screenL: `@media only screen and (max-width: ${screenL}px)`,
	screenM: `@media only screen and (max-width: ${screenM}px)`,
	screenS: `@media only screen and (max-width: ${screenS}px)`,
	screenXS: `@media only screen and (max-width: ${screenXS}px)`,
	screenXXS: `@media only screen and (max-width: ${screenXXS}px)`,


};