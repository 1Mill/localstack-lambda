const { v4: uuidv4 } = require('uuid')

// ! "async" is required for invocation type "RequesetResponse" to work
exports.handler = async (_event, _context) => {
	return {
		message: 'Your UUID is included in this payload',
		uuid: uuidv4(),
	}
}
