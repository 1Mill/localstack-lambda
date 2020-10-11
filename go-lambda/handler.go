package main

import (
	"context"
	"fmt"

	"github.com/aws/aws-lambda-go/lambda"
)

func handleRequest(ctx context.Context, event interface{}) (string, error) {
	fmt.Println(ctx)

	fmt.Println(event)

	return "Hello World!", nil
}

func main() {
	lambda.Start(handleRequest)
}
