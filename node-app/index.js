const AWS = require('aws-sdk')

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESSKEY_ID,
	endpoint: process.env.AWS_ENDPOINT || undefined,
	region: process.env.AWS_REGION,
	secretAccessKey: process.env.AWS_ACCESSKEY_SECRETKEY,
})

const lambda = new AWS.Lambda({ apiVersion: '2015-03-31' })

console.log('Hello world!')
