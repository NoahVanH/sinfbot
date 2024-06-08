import type {
	AutocompleteInteraction,
	CacheType,
	ChatInputCommandInteraction,
	ClientEvents,
	Collection,
	ModalSubmitInteraction,
	SlashCommandBuilder
} from "discord.js";

export interface Command {
	data: SlashCommandBuilder;
	execute: (interaction: ChatInputCommandInteraction) => void;
	cooldown?: number;
	autocomplete?: (interaction: AutocompleteInteraction) => void;
	modal?: (interaction: ModalSubmitInteraction<CacheType>) => void;
}

export interface Event {
	name: keyof ClientEvents;
	execute: (...args) => void;
	once?: boolean | false;
}

declare module "discord.js" {
	export interface Client {
		commands: Collection<string, Command>;
		cooldowns: Collection<string, number>;
	}
}
