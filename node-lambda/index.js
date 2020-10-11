// ! "async" is required for RequesetResponse to work
exports.handler = async (event, _context) => {
	console.log(event)
	return { testing: true }
}
