const AWS = require('aws-sdk')

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESSKEY_ID,
	endpoint: process.env.AWS_ENDPOINT || undefined,
	region: process.env.AWS_REGION,
	secretAccessKey: process.env.AWS_ACCESSKEY_SECRETKEY,
})

console.log('Hello world!')
