const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  if (args[0] === "number") {
    await message.guild.members.fetch(args[0]).send(args.join(" "));
  } else {
    args[0] = "";
    await message.mentions.users.first().send(args.join(" "));
  }
};

module.exports.help = {
  name: "dm",
  description: "Sends a direct-message",
  usage: "dm"
};
