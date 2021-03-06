const AWS = require('aws-sdk')

const lambda = new AWS.Lambda({
	accessKeyId: process.env.AWS_ACCESSKEY_ID,
	apiVersion: '2015-03-31',
	endpoint: process.env.AWS_ENDPOINT || undefined,
	region: process.env.AWS_REGION,
	secretAccessKey: process.env.AWS_ACCESSKEY_SECRETKEY,
})
const params = {
	FunctionName: process.env.LAMBDA_FUNCTIONNAME,
	InvocationType: 'RequestResponse',
	Payload: JSON.stringify({
		anotherMyProperty: 'abcd',
		myProperty: true,
	}),
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
