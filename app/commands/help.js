const Discord = module.require("discord.js");
const prefix = process.env.PREFIX;

module.exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
    .setTitle("Command List")
    .setColor(0x009fff)
    .addField(
      "Avatar",
      "Arguments: (@)\nDisplays Mentioned User's / Author's Avatar",
      true
    )
    .addField(
      "Ban",
      "Arguments: [@] (R)\nBans Mentioned User With R Reason",
      true
    )
    .addField(
      "DM",
      "Arguments: [@] [C]\nSends DM With Content C To Mentioned User",
      true
    )
    .addField(
      "Gay",
      "Arguments: (@)\nDisplays Mentioned User's / Author's Gay Meter",
      true
    )
    .addField(
      "Help",
      "Arguments: None\nDisplays Command List With All Commands",
      true
    )
    .addField(
      "Horny",
      "Arguments: (@)\nDisplays Mentioned User's / Author's Horny Meter",
      true
    )
    .addField(
      "Kick",
      "Arguments: [@] (R)\nKicks Mentioned User With R Reason",
      true
    )
    .addField(
      "Ping",
      "Arguments: None\nDisplays Bot Ping In Milliseconds",
      true
    )
    .addField(
      "PP",
      "Arguments: (@)\nDisplays Mentioned User's / Author's PP Meter",
      true
    )
    .addField("Purge", "Arguments: [L]\nPurges L Messages", true)
    .addField(
      "Roll",
      "Arguments: (@)\nDisplays Mentioned User's / Author's Dice Roll Result",
      true
    )
    .addField(
      "Skid",
      "Argumemts: (@)\nDisplays Mentioned User's / Author's Skid Meter",
      true
    )
    .setURL("https://discord.gg/Nej2rH")
    .setFooter("Note: [] = Required, () = Optional")
    .setTimestamp();
  await message.channel.send(embed);
};

module.exports.help = {
  name: "help",
  description: "Shows command list",
  usage: "help"
};
