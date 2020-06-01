const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var skidPercentage = Math.floor(Math.random() * 100);
  var skidInt = Math.round(skidPercentage / 10);
  var skidString = "";
  var unSkidString = "";
  for (var i = 0; i < skidInt; i++) {
    skidString += "=";
  }
  for (var i = 0; i < 10 - skidInt; i++) {
    unSkidString += "　";
  }
  if (message.mentions.users.first() === undefined) {
    await message.channel.send(
      message.author.username +
        "'s Skid Meter **[ " +
        skidString +
        unSkidString +
        " ]   " +
        skidPercentage +
        "%**"
    );
  } else {
    await message.channel.send(
      message.mentions.users.first().username +
        "'s Skid Meter **[ " +
        skidString +
        unSkidString +
        " ]   " +
        skidPercentage +
        "%**"
    );
  }
};

module.exports.help = {
  name: "skid",
  description: "Gets skid percentage",
  usage: "skid"
};
