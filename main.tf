// ! Incomplete terraform configuration, only for show-and-tell purposes only

// TOOD: Use terraform to (1) zip, (2) publish, and then (3) publish ARN
// TODO: for connection purposes. Helper modules can be found here:
// TODO: https://github.com/click-flow/terraform-modules

module "node-lambda" {
	source = "github.com/click-flow/terraform-modules.git//v0.13/aws-lambda/v1"

	environment = [
		{ key = "NODE_ENV", value = "production" },
	]
	excluded_files = [
		".gitignore",
		"dev.config",
	]
	handler = "index.handler"
	name = "node-lambda"
	runtime = "nodejs12.x"
	source_directory = "${path.module}/node-lambda"
}

module "node-lambda-unique-handler" {
	source = "github.com/click-flow/terraform-modules.git//v0.13/aws-lambda/v1"

	environment = [
		{ key = "NODE_ENV", value = "production" },
	]
	excluded_files = [
		"dev.config",
	]
	handler = "index.myUniqueHandler"
	name = "node-lambda-unique-handler"
	runtime = "nodejs12.x"
	source_directory = "${path.module}/node-lambda-unique-handler"
}
