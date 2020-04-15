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
export const mediaQuery = {
	maxMobile: `@media only screen and (max-width: ${ScreenWidthMaxUhfMobile}px)`,
	maxLarge: `@media only screen and (max-width: ${ScreenWidthMaxXLarge}px)`
};