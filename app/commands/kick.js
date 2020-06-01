const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.member.hasPermission("KICK_MEMBERS")) {
    if (message.mentions.users.first() === undefined) {
      await message.channel.send("Please mention a user to kick!");
    } else {
      if (args.length == 1) {
        const ment = message.mentions;
        await message.channel.send(
          "Kicked " + message.mentions.users.first().tag + "!"
        );
        ment.members.first().kick();
      } else {
        const ment = message.mentions;
        await message.channel.send(
          "Kicked " + message.mentions.users.first().tag + "!"
        );
        args[0] = "";
        message.mentions.members.first().kick(args.join(" "));
      }
    }
  } else {
    await message.channel.send("You don't have permission to kick people!");
  }
};

module.exports.help = {
  name: "kick",
  description: "Kicks users",
  usage: "kick"
};
