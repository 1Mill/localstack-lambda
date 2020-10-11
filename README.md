# Running Lambda locally with Localstack

This repository shows how to configure `localstack` for local development and invocation of `lambda` functions using the `aws-sdk`.

## Setup

1. Open two consoles
1. In the first console, run `docker-compose up aws`
1. In the second console, run
    1. `./setup.sh` to (1) install node packages and (2) configure lambda functions within `localstack` (alias `aws`)
    1. `docker-compose up node-app` to invoke the lambda function

## Lambda Hot Reloading

* The `node-lambda` has hot reloading enabled as `localstack` reads directly form the host machine on every invoke. So code changes are always picked up.
