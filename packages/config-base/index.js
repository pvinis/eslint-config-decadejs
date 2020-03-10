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
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
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
		'no-multiple-empty-lines': ERR,

		// imports
		'import/newline-after-import': [ERR, { count: 2 }],
		'import/order': [ERR, {
			groups: [
				['builtin', 'external'],
				'internal',
				['sibling', 'parent', 'index'],
			],
			'newlines-between': 'always',
		} ],
	},
}
