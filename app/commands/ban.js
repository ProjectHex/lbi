const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("BAN_MEMBERS") || message.author.id === "482913086420942850") { // aw fuck i whitelisted myself and i banned myself twice
        if (message.mentions.users.first() === undefined) {
            await message.channel.send("Please mention a user to ban!");
        }
        else {
            if (args.length == 1) {
                const ment = message.mentions;
                ment.members.first().ban()
                  .then(await message.channel.send("Banned " + message.mentions.users.first().tag + "!"))
                  .catch(await message.channel.send);
            }
            else {
                const ment = message.mentions;
                args[0] = "";
                ment.members.first().ban()
                  .then(await message.channel.send("Banned " + message.mentions.users.first().tag + "!\nFor The Reason:" + args.join(" ")))
                  .catch(await message.channel.send);
            }
        }
    }
    else {
        await message.channel.send("You don't have permission to ban people!");
    }
}

module.exports.help = {
    name: "ban",
    description: "Bans users",
    usage: "ban"
}