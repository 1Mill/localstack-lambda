const AWS = require('aws-sdk')

const lambda = new AWS.Lambda({
	accessKeyId: process.env.AWS_ACCESSKEY_ID,
	apiVersion: '2015-03-31',
	endpoint: process.env.AWS_ENDPOINT || undefined,
	region: process.env.AWS_REGION,
	secretAccessKey: process.env.AWS_ACCESSKEY_SECRETKEY,
})
const params = {
	FunctionName: 'node-lambda',
	// FunctionName: 'node-lambda-unique-handler',
	InvocationType: 'RequestResponse',
	Payload: JSON.stringify({ passed: true }),
}
lambda.invoke(params, (err, data) => {
	if (err) {
		console.error(err, err.stack)
	} else {
		console.log({
			...data,
			Payload: JSON.parse(data.Payload)
		})
	}
})
