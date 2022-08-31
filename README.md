# botventic-serverless

The 2022-onwards codebase for BotVentic using Lambda to support slash-commands in Discord. [Add the bot to your Discord](https://discord.com/oauth2/authorize?client_id=174449568304332800&scope=applications.commands) or [join the official Discord](https://3v.fi/s/ohbot-discord).

## Contributing

Pull requests are generally welcome, especially for bug fixes and the like. For new features, please propose via Discord or GH issues before doing any work on it.

## Infrastructure setup

1. Create a Lambda function on AWS using the matching Node runtime and set up environment variables (see index.js for a list).
2. Create an API Gateway endpoint with a POST method using an integration with the Lambda as its target.
3. Zip the repository, including node_modules.
4. Update the Lambda code using the zip.
5. Enter the API Gateway endpoint URL + path into your registered Discord application as the integration endpoint.
6. Run index.js once with envvar UPDATE_SLASH_COMMANDS=true to make Discord pick up changes to the supported slash commands
