# Running Lambda locally with Localstack

## Setup

1. Open two consoles
1. In the first console, run `docker-compose up aws`
1. In the second console, run
    1. `./setup.sh` to (1) install node packages and (2) configure lambda functions within `localstack` (alias `aws`)
    1. `docker-compose up node-app` to invoke the lambda function
