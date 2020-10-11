exports.myUniqueHandler = async (event, _context) => {
	console.log('Showing up in the "aws" service logs:')
	console.log(event)
	return "This is the value found in data.Payload"
}
