#!/bin/sh

# * Run setup steps for applications
docker-compose -f ./setup.docker-compose.yml up

# * Configure vars for lambda functions
AWS_ENDPOINT=http://localhost:4566/
HOST_ABSOLUTEPATH=/$(cd -- ./node-lambda && pwd)
LAMBDA_FUNCTIONNAME=node-lambda
LAMBDA_HANDLER=index.handler
LAMBDA_RUNTIME=nodejs12.x

# * Delete function if it already exists
aws --endpoint-url $AWS_ENDPOINT \
	lambda delete-function \
		--function-name $LAMBDA_FUNCTIONNAME

# * Create function
aws --endpoint-url $AWS_ENDPOINT \
	lambda create-function \
		--code S3Bucket="__local__",S3Key="$HOST_ABSOLUTEPATH" \
		--function-name $LAMBDA_FUNCTIONNAME \
		--handler $LAMBDA_HANDLER \
		--role just-has-to-exist \
		--runtime $LAMBDA_RUNTIME
