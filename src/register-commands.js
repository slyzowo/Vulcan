// Imports for Discord.js & .env
const {REST, Routes, ApplicationCommandOptionType} = require("discord.js");
require('dotenv').config();

const commands = [
  {name : "echo", 
    description : "says what you said",
    options: [
      {
        name: "echo-message",
        description: "Echos the Message",
        type: ApplicationCommandOptionType.String,
        required: true,
}]},

  {name : "whisper-echo", 
    description : "says what you said but as a whisper",
    options: [
      {
        name: "whisper-echo-message",
        description: "Echos the Message but as a whisper",
        type: ApplicationCommandOptionType.String,
        required: true,
}]},

  {name : "add",
    description : "adds two numbers together",
    options: [
    {
      name: "first-number",
      description: "the first number",
      type: ApplicationCommandOptionType.Number,
      required: true,
    },
    {
      name: "second-number",
      description: "the second number",
      type: ApplicationCommandOptionType.Number,
      required: true,
  }]},];

// Token for REST api
const rest = new REST({version: "10"}).setToken(process.env.TOKEN);

// Error handling
(async() =>{
  try{
    console.log("Registering Slash Commands");
    await rest.put(
      Routes.applicationGuildCommands(process.env.BOT_ID, process.env.GUILD_ID),
      {body: commands}
    );
    console.log("Slash Commands were Registered");
  }

  catch(error){
      console.log(`There has been an error! \n\n ${error}`);
  }
})();