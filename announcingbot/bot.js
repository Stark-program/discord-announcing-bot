const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login("ODUxMTcwMzQwOTUyMzQyNjI4.YL0YJw.OcnOaSpbJDBcL0lw1DGqqiD3O7c");
