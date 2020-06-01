const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var ppSize = Math.floor(Math.random() * 5) + 2;
  var ppString = "";
  for (var i = 0; i < ppSize; i++) {
    ppString += "=";
  }
  if (message.mentions.users.first() === undefined) {
    await message.channel.send(
      message.author.username +
        "'s PP Size **[ 8" +
        ppString +
        "D ]   " +
        ppSize +
        " inches**"
    );
  } else {
    await message.channel.send(
      message.mentions.users.first().username +
        "'s PP Size **[ 8" +
        ppString +
        "D ]   " +
        ppSize +
        " inches**"
    );
  }
};

module.exports.help = {
  name: "pp",
  description: "Gets pp size",
  usage: "pp"
};
