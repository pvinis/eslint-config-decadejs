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
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/jsx-indent': [ERR, 'tab'],
		'react/jsx-tag-spacing': ERR,
		'react/display-name': OFF,
		'react/prop-types': OFF,
	},
}
