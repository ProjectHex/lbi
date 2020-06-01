const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  await message.channel.send(
    message.author.username +
      "'s Dice Roll Result is: **" +
      (Math.floor(Math.random() * 5) + 1) +
      "**."
  );
};

module.exports.help = {
  name: "roll",
  description: "Rolls a dice",
  usage: "roll"
};
