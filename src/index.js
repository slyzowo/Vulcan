// imports Client and Intents from Discord.js
const {Client, IntentsBitField} = require("discord.js");

// security 
require('dotenv').config();


const client = new Client({
  intents: [                    // Intents are Permissions
    IntentsBitField.Flags.Guilds,            // see servers
    IntentsBitField.Flags.GuildMembers,      // see server members
    IntentsBitField.Flags.GuildMessages,     // read messages i think?
    IntentsBitField.Flags.MessageContent,    // read messages
]});

client.on("ready", (c) => { console.log(`${c.user.tag} has been started!`); }); // logging 

client.on("messageCreate", (message) => {
  console.log(message.author.username, message.author.id, message.content); // logs username, userid, and message content

  if (message.author.bot){ return; } // voids recursion

/* Removed Hello command
  if (message.content === "hello"){ message.reply('hello!'); } says hello to you
*/
});

client.on("interactionCreate", (interaction) =>{
  if(!interaction.isChatInputCommand()) return;
  console.log(interaction.commandName);

  if (interaction.commandName === "echo"){ 
    const usermessage = interaction.options.get("echo-message")?.value;
    interaction.reply(`${usermessage}`);
  }

  if (interaction.commandName === "whisper-echo"){ 
    const usermessage = interaction.options.get("whisper-echo-message")?.value;
    interaction.reply(`-# ${usermessage}`);
  }

// if (interaction.commandName === "whisper-echo"){  }

  if (interaction.commandName === "add"){ 
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;

    interaction.reply(`The result of ${num1} + ${num2} = ${num1 + num2}`);

  }
})

client.login(process.env.TOKEN);