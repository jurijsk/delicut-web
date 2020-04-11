module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint',
	],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		"prefer-const": "off",
		"no-mixed-spaces-and-tabs": "warn",
		"@typescript-eslint/explicit-function-return-type": "warn",
		"@typescript-eslint/camelcase": "warn", //I know it is bad but it is not my choice.
		"@typescript-eslint/interface-name-prefix": "off"
	}
};