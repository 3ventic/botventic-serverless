const path = require("path");
const { AWSLambdaServer, SlashCreator } = require("slash-create");
const MathCommand = require("./commands/math");

const creator = new SlashCreator({
	applicationID: process.env.DISCORD_APP_ID,
	publicKey: process.env.DISCORD_PUBLIC_KEY,
	token: process.env.DISCORD_BOT_TOKEN,
});

function logAll() {
	console.log("logAll", arguments);
}

creator
	.on("debug", (debug) => console.log("debug", debug))
	.on("warn", (warn) => console.warn("warn", warn))
	.on("error", (error) => console.error("error", error))
	.on("rawRequest", logAll)
	.on("rawInteraction", logAll)
	// The first argument is required, the second argument is the name or "target" of the export.
	// It defaults to 'interactions', so it would not be strictly necessary here.
	.withServer(new AWSLambdaServer(module.exports, "interactions"))
	.registerCommands([MathCommand]);

console.log("registered commands", creator.commands);

if (process.env.UPDATE_SLASH_COMMANDS) {
	console.log("updating slash commands");
	creator.syncCommands();
}
