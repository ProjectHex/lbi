const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var gayPercentage = Math.floor(Math.random() * 100);
  var gayInt = Math.round(gayPercentage / 10);
  var gayString = "";
  var unGayString = "";
  for (var i = 0; i < gayInt; i++) {
    gayString += "=";
  }
  for (var i = 0; i < 10 - gayInt; i++) {
    unGayString += "　";
  }
  if (message.mentions.users.first() === undefined) {
    await message.channel.send(
      message.author.username +
        "'s Gay Meter **[ " +
        gayString +
        unGayString +
        " ]   " +
        gayPercentage +
        "%**"
    );
  } else {
    await message.channel.send(
      message.mentions.users.first().username +
        "'s Gay Meter **[ " +
        gayString +
        unGayString +
        " ]   " +
        gayPercentage +
        "%**"
    );
  }
};

module.exports.help = {
  name: "gay",
  description: "Gets gay percentage",
  usage: "gay"
};