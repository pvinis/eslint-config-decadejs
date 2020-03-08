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



//     globals: {
//         Atomics: 'readonly',
//         SharedArrayBuffer: 'readonly',
//     },
//     // parser: 'babel-eslint',
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true,
//         },
//         ecmaVersion: 2018,
//         sourceType: 'module',
//     },
//     rules: {
//         'no-unused-vars': OFF,
//         'no-console': OFF,
//     },
// }
