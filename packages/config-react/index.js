/* eslint-disable no-unused-vars */
var OFF = 0
var WARN = 1
var ERR = 2
/* eslint-enable no-unused-vars */


module.exports = {
	plugins: ['react'],
	extends: [
					'plugin:react/recommended',
	],
     parserOptions: {
         ecmaFeatures: {
             jsx: true,
         },
         },
	rules: {
	},
}



/// use base

//     globals: {
//         Atomics: 'readonly',
//         SharedArrayBuffer: 'readonly',
//     },
//     // parser: 'babel-eslint',
//     parserOptions: {
//         ecmaVersion: 2018,
//         sourceType: 'module',
//     },
//     rules: {
//         'no-unused-vars': OFF,
//         'no-console': OFF,

//         'react/jsx-indent': [ERR, 'tab'],
//         'react/prop-types': OFF,
//         'react/jsx-space-before-closing': ERR,
//         'react/display-name': OFF,
//     },
// }
