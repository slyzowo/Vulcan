// imports Client and Intents from Discord.js
const {Client, IntentsBitField} = require("discord.js");

// security 
require('dotenv').config();


const client = new Client({
  intents: [                                 // Intents are Permissions
    IntentsBitField.Flags.Guilds,            // 
    IntentsBitField.Flags.GuildMembers,      // 
    IntentsBitField.Flags.GuildMessages,     // 
    IntentsBitField.Flags.MessageContent,    // Ablity to read messages
  ]
});

client.on("ready", (c) => { console.log(`${c.user.tag} has been started!`); }); // logging 

client.on("messageCreate", (message) => {
  console.log(message.author.username, message.author.id, message.content);

  if (message.author.bot){ return; } // voids recursion

  if (message.content === "hello"){ message.reply('hello!'); } // says hello to you
});

client.login(process.env.TOKEN);