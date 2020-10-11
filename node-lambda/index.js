exports.handler = (event) => {
	console.log('Triggered!')
	console.log(event)
	return { testing: true }
}
