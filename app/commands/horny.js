const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var hornyPercentage = Math.floor(Math.random() * 100);
  var hornyInt = Math.round(hornyPercentage / 10);
  var hornyString = "";
  var unHornyString = "";
  for (var i = 0; i < hornyInt; i++) {
    hornyString += "=";
  }
  for (var i = 0; i < 10 - hornyInt; i++) {
    unHornyString += "　";
  }
  if (message.mentions.users.first() === undefined) {
    await message.channel.send(
      message.author.username +
        "'s Horny Meter **[ " +
        hornyString +
        unHornyString +
        " ]   " +
        hornyPercentage +
        "%**"
    );
  } else {
    await message.channel.send(
      message.mentions.users.first().username +
        "'s Horny Meter **[ " +
        hornyString +
        unHornyString +
        " ]   " +
        hornyPercentage +
        "%**"
    );
  }
};

module.exports.help = {
  name: "horny",
  description: "Gets horny percentage",
  usage: "horny"
};