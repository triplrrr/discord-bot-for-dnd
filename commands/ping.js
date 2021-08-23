const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports.data = new SlashCommandBuilder()
.setName('ping')
.setDescription('Replies with Pong!');



/**
 * @param {CommandInteraction} interaction
 */
module.exports.execute = async (interaction) => {
  await interaction.reply('Pong!');
};
