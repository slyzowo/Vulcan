// imports Client and Intents from Discord.js
const {Client, IntentsBitField, EmbedBuilder} = require("discord.js");

// security 
require('dotenv').config();


const client = new Client({
  intents: [                    // Intents are Permissions
    IntentsBitField.Flags.Guilds,            // see servers
    IntentsBitField.Flags.GuildMembers,      // see server members
    IntentsBitField.Flags.GuildMessages,     // read messages i think?
    IntentsBitField.Flags.MessageContent,    // read messages
]});

client.on("ready", (c) => { console.log(`${c.user.tag} has been started!`); }); // logging Start Sequence

client.on("messageCreate", (message) => {
  if (message.author.bot){ return; } // voids recursion
  });

client.on("interactionCreate", (interaction) =>{
  if(!interaction.isChatInputCommand()) return;
  console.log(interaction.commandName); // logs command sent

  if (interaction.commandName === "echo"){ 
    const userMessage = interaction.options.get("echo-message")?.value;
    interaction.reply(`${userMessage}`);
  }
  
  if (interaction.commandName === "whisper-echo"){ 
    const userMessage = interaction.options.get("whisper-echo-message")?.value;
    interaction.reply(`${userMessage}`);
  }

  if (interaction.commandName === "embed"){ 

    const embedTitle = interaction.options.get("embed-title")?.value;
    const embedDescription = interaction.options.get("embed-description")?.value;

    const embed = new EmbedBuilder()
    .addFields({
      name: `${embedTitle}`, 
      value: `${embedDescription}`});
    interaction.reply({ embeds: [ embed ]});
  }

  if (interaction.commandName === "add"){ 
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;
    interaction.reply(`The result of ${num1} + ${num2} = ${num1 + num2}`);
  }

  if (interaction.commandName === "subtract"){ 
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;
    interaction.reply(`The result of ${num1} + ${num2} = ${num1 - num2}`);
  }

  if (interaction.commandName === "multiply"){ 
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;
    interaction.reply(`The result of ${num1} + ${num2} = ${num1 * num2}`);
  }

  if (interaction.commandName === "divide"){ 
    const num1 = interaction.options.get("first-number")?.value;
    const num2 = interaction.options.get("second-number")?.value;
    interaction.reply(`The result of ${num1} + ${num2} = ${num1 / num2}`);
  }
})

client.login(process.env.TOKEN);