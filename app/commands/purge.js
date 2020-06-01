const Discord = module.require("discord.js");
const client = new Discord.Client();

module.exports.run = async (client, message, args) => {
  if (
    message.member.hasPermission("MANAGE_MESSAGES") ||
    message.author.id === "482913086420942850"
  ) {
    if (Number(args[0]) < 100 && Number(args[0]) > 0) {
      await message.channel.bulkDelete(Number(args[0]) + 1);
    } else if (Number(args[0]) < 1 || Number(args[0]) > 99) {
      await message.channel.send("Please input a number (1 ~ 99)");
    } else {
      await message.channel.send("Please input a number to purge");
    }
  }
};

module.exports.help = {
  name: "purge",
  description: "Purges channel",
  usage: "purge"
};
