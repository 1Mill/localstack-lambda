const AWS = require('aws-sdk')

console.log(process.env.AWS_ACCESSKEY_ID)
console.log(process.env.AWS_REGION)
console.log(process.env.AWS_ACCESSKEY_SECRETKEY)
console.log(process.env.AWS_ENDPOINT)
const lambda = new AWS.Lambda({
	accessKeyId: process.env.AWS_ACCESSKEY_ID,
	apiVersion: '2015-03-31',
	endpoint: process.env.AWS_ENDPOINT || undefined,
	region: process.env.AWS_REGION,
	secretAccessKey: process.env.AWS_ACCESSKEY_SECRETKEY,
})
const params = {
	FunctionName: 'node-lambda',
	InvocationType: 'RequestResponse',
	Payload: JSON.stringify({ passed: true }),
}
lambda.invoke(params, (err, data) => {
	const datetime = new Date().toISOString()
	const log = { datetime, data, err }
	console.log(log)
})
