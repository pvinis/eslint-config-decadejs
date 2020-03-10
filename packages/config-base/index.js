/* eslint-disable no-unused-vars */
var OFF = 0
var WARN = 1
var ERR = 2
/* eslint-enable no-unused-vars */


module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {
		sourceType: 'module',
	},
	extends: [
		'eslint:recommended',
	],
	rules: {
		semi: [ERR, 'never'],
		quotes: [ERR, 'single'],
		'comma-dangle': [ERR, 'always-multiline'],
		'object-curly-spacing': [ERR, 'always'],
		'key-spacing': ERR,
		indent: [ERR, 'tab'],
		'arrow-spacing': ERR,
		'no-multi-spaces': [ERR, { 'ignoreEOLComments': true }], // has exceptions too, if needed
		'comma-spacing': ERR,
	},
}
