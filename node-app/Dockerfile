FROM node:14-alpine

RUN apk update

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

ENV \
	AWS_ACCESSKEY_ID \
	AWS_ACCESSKEY_SECRETKEY \
	AWS_ENDPOINT \
	AWS_REGION \
	LAMBDA_FUNCTIONNAME \
	NODE_ENV=production

COPY . .

CMD [ "npm", "run", "start" ]
