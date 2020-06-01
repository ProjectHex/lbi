const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require("http");
const express = require("express");
const app = express();
const prefix = process.env.PREFIX;

client.on("ready", () => {
  console.log("Connected!");
});

app.get("/", (request, response) => {
  console.log("Ping received!");
  response.sendStatus(200);
});

app.listen(process.env.PORT);

client.on("message", message => {
  if (message.author.bot) return;
  if (
    message.member &&
    message.channel.id !== "684581927810105371" &&
    !message.member.hasPermission("ADMINISTRATOR")
  ) {
    if (message.content.toLowerCase().includes("discord.gg/")) {
      message.delete();
      message.channel.send(
        "Helix Bot detected an discord.gg invite!\nAuthor: " +
          message.author.tag +
          "\nAuthor ID: " +
          message.author.id
      );
    } else if (
      message.content.toLowerCase().includes("discordapp.com/invite/")
    ) {
      message.delete();
      message.channel.send(
        "Helix Bot detected an discord.com invite!\nAuthor: " +
          message.author.tag +
          "\nAuthor ID: " +
          message.author.id
      );
    } else if (message.content.toLowerCase().includes("discord.com/invite/")) {
      message.delete();
      message.channel.send(
        "Helix Bot detected an discord.com invite!\nAuthor: " +
          message.author.tag +
          "\nAuthor ID: " +
          message.author.id
      );
    }
  }
  if (message.content.indexOf(prefix) !== 0) return;
  
  var args2 = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args2.shift().toLowerCase();
  const args = args2.splice(0, args2.length);

  if (command == "verify") {
    if (message.channel.id === "711585149501833297") {
      message.channel.send("Please Check your DMs !");
      require("./verify.js").run(message.member);
      return;
    }
  }
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.on("messageDelete", async message => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Message Deleted")
    .setColor(0x009fff)
    .setAuthor(
      message.author.tag,
      message.author.displayAvatarURL({ dynamic: true, size: 2048 })
    )
    .addField("Channel", message.channel.name, true)
    .addField("Message", message.cleanContent, true)
    .setTimestamp();
  await message.guild.channels.cache.find(ch => ch.name === "logs").send(embed);
});

client.on("messageUpdate", async (oldMessage, newMessage) => {
  if (oldMessage.content === "" || newMessage.content === "" || oldMessage.content === newMessage.content) return;
  const embed = new Discord.MessageEmbed()
    .setTitle("Message Edited")
    .setColor(0x009fff)
    .setAuthor(
      oldMessage.author.tag,
      oldMessage.author.displayAvatarURL({ dynamic: true, size: 2048 })
    )
    .addField("Channel", oldMessage.channel.name, true)
    .addField("Original Message", oldMessage.content, true)
    .addField("New Message", newMessage.content, true)
    .setTimestamp();
  await oldMessage.guild.channels.cache
    .find(ch => ch.name === "logs")
    .send(embed);
});

client.login(process.env.TOKEN);