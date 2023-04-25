const path = require('path')

module.exports = {
	mode: 'development',
	entry: './script.js',
	output: {
		filename: 'bundle.js'
	},
	watch: true
}
