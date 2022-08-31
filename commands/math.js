const { SlashCommand, CommandOptionType } = require("slash-create");
const mjs = require("mathjs");

module.exports = class MathCommand extends SlashCommand {
	constructor(creator) {
		super(creator, {
			name: "math",
			description: "Do some math or unit conversions.",
			options: [
				{
					type: CommandOptionType.STRING,
					name: "expression",
					description: "e.g. 1 + 1, 37 celsius to fahrenheit, etc.",
					required: true,
				},
			],
		});

		this.filePath = __filename;
	}

	async run(ctx) {
		try {
			const result = mjs.evaluate(ctx.options.expression);
			return `${ctx.options.expression}\n= ${result}`;
		} catch (err) {
			return `= Error: ${err.message}`;
		}
	}
};
