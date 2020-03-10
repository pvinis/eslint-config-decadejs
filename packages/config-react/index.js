/* eslint-disable no-unused-vars */
var OFF = 0
var WARN = 1
var ERR = 2
/* eslint-enable no-unused-vars */


module.exports = {
	plugins: ['react'],
	extends: [
		'@decadejs/eslint-config-base',
		'plugin:react/recommended',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/jsx-indent': [ERR, 'tab'],
		'react/jsx-space-before-closing': ERR,
		'react/display-name': OFF,
	},
}
