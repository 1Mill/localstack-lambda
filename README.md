# Running Lambda locally with Localstack

## Setup

1. Open two consoles
1. In the first console, run `docker-compose up aws`
1. In the second console, run
    1. `docker-compose -f setup.docker-compose.yml up` to install npm packages
    1. `./setup.sh` to configure the lambda in `localstack`
    1. `docker-compose up node-app` to invoke the lambda via `aws-sdk`
