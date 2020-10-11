# Lambda

```sh
# Compile files
docker run --rm -v "/$(cd -- ./ & pwd)":/go/src/handler lambci/lambda:build-go1.x sh -c 'go mod download && go build handler.go'

# Invoke files
docker run --rm -v "/$(cd -- ./ & pwd)":/var/task lambci/lambda:go1.x handler '"my-arbitrary-payload"'
```
