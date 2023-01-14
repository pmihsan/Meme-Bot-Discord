import Discord from 'discord.js'
import axios from "axios";

const memeCommand = new Discord.SlashCommandBuilder()

memeCommand.setName('meme') // -> command to call the bot
memeCommand.setDescription('Sends meme to the user')

const memeCmdinteraction = async (interaction) => {
    await interaction.reply('Generating a Meme for you...')
    const res = await axios('https://meme-api.com/gimme')
    // console.log('Meme Responses ', res.data)

    console.log('Getting Meme...')
    const embed = new Discord.EmbedBuilder()
    embed.setTitle('MEME')
    embed.setImage(res.data.url)

    // console.log(interaction)
    await interaction.editReply({
        embeds: [embed]
    })
    console.log('Meme Sent')
}

export default {
    data: memeCommand,
    execute: memeCmdinteraction,
}