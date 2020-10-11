# Running Lambda locally with Localstack

This repository shows how to configure `localstack` for local development and invocation of `lambda` functions using the `aws-sdk`.

## Setup

1. Open two consoles
1. In the first console, run `docker-compose up aws` to start running `localstack` (alias `aws`)
1. In the second console, run
    1. `./setup.sh` to (1) install node packages and (2) create the lambda functions in `localstack`
    1. `docker-compose up node-app` to invoke the lambda function input as `LAMBDA_FUNCTIONNAME` (found in `dev.config`)

## Lambda Hot Reloading

* The `go-lambda` service does not have hot reloading as it must be pre-compiled. To compile the `go-lambda` service, checkout the `README.md` in the `go-lambda` folder.
* The `node-lambda` has hot reloading enabled as `localstack` reads directly form the host machine on every invoke. So code changes are always picked up.

## TODO

* Abstract Go compile step to `./setup.sh`; conditionally run depending on input `RUNTIME`.
