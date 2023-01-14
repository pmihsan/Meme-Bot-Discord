import 'dotenv/config';
import bot from './lib/discord-client'

import express from 'express'
import bodyParser from 'body-parser'
import Discord from "discord.js";

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())


const PORT = 5000
app.listen(PORT, () => {
    console.log(`Server Running on Port => ${PORT}`)
})

bot.on(Discord.Events.InteractionCreate, async(interaction) => {
    if(interaction.isChatInputCommand()) {
        const command = interaction.client.commands.get(interaction.commandName)
        if(command) {
            await command.execute(interaction)
        }
    }
})


















