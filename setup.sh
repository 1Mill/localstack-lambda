#!/bin/sh

# * Run setup steps for applications
docker-compose -f ./setup.docker-compose.yml up

LAMBDA_CONFIG_FILENAME=dev.config
LAMBDA_DIRECTORIES=$(
	find . \
	-name "$LAMBDA_CONFIG_FILENAME" \
	-not -path "*node_modules*" \
	-printf "%h\n" \
)

for directory in $LAMBDA_DIRECTORIES
do
	# * Reset / configure vars for lambda functions
	AWS_ENDPOINT=http://localhost:4566/
	FUNCTIONNAME=
	HANDLER=
	HOST_ABSOLUTEPATH=/$(cd -- $directory && pwd)
	RUNTIME=

	# * Import configuration vars for lambda function
	source $directory/$LAMBDA_CONFIG_FILENAME

	# * Delete function if it already exists
	aws --endpoint-url $AWS_ENDPOINT \
		lambda delete-function \
			--function-name $FUNCTIONNAME

	# * Create function
	aws --endpoint-url $AWS_ENDPOINT \
		lambda create-function \
			--code S3Bucket="__local__",S3Key="$HOST_ABSOLUTEPATH" \
			--function-name $FUNCTIONNAME \
			--handler $HANDLER \
			--role just-has-to-exist \
			--runtime $RUNTIME
done
