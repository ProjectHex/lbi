const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  const user = client.users.cache.get(args[0]);
  if (user !== undefined) {
    await message.channel.send({
      files: [user.displayAvatarURL({ dynamic: true, size: 2048 })]
    });
  } else if (message.mentions.users.first() === undefined) {
    await message.channel.send({
      files: [message.author.displayAvatarURL({ dynamic: true, size: 2048 })]
    });
  } else {
    await message.channel.send({
      files: [
        message.mentions.users
          .first()
          .displayAvatarURL({ dynamic: true, size: 2048 })
      ]
    });
  }
};

module.exports.help = {
  name: "avatar",
  description: "Gets an avatar image",
  usage: "avatar"
};
