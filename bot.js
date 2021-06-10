const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("voiceStateUpdate", (oldMember, newMember) => {
  let newUserChannel = newMember.channelID;
  let oldUserChannel = oldMember.channelID;
  console.log(1, newUserChannel, 2, oldUserChannel);
  const textChannel = guild.channels.cache.find(
    (channel) => channel.name === "general"
  );
  console.log(textChannel);

  if (oldUserChannel === null && newUserChannel !== null) {
    console.log("user has joined a voice channel");
  } else if (newUserChannel === null) {
    console.log("user has left voice channel");
  }
});

client.on("message", (msg) => {
  if (msg.content === "announce") {
    msg.reply("hello", { tts: true });
  }
});

client.login(process.env.BOT_LOGIN_TOKEN);
