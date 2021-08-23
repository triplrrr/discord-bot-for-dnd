const { CommandInteraction } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');



module.exports.data = new SlashCommandBuilder()
.setName('foo')
.setDescription('Replies with bar')
.addIntegerOption(option => 
  option.setName('count')
  .setDescription('number of times to say bar')
  .setRequired(false)
)

/**
 * @param {CommandInteraction} interaction
 */
module.exports.execute = async (interaction) => {
  if (!interaction.options.get('count')) await interaction.reply('bar');
  else {
    await interaction.reply('bar '.repeat(interaction.options.get('count').value));
  }
};
