const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    cateogry: "utilites",
    run: async(client, message, args) => {
        if (message.deletable) message.delete();

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        const avatar = message.author.displayAvatarURL({ size: 4096, dynamic: true });
        const embed = new MessageEmbed()
            .setTitle('__**♨ Command\'s ♨**__')
            .setThumbnail('https://i.imgur.com/tq5CmPL.jpg')
            .setAuthor(`The Oriental`, avatar)
            .addFields({ name: '__**📝 My Prefix**__!', value: '__**💠 to!**__!' }, { name: '==================================', value: '\u200B' }, { name: '\_\_\*\*\*🔑Admin!\*\*\*\_\_\_', value: '**- Afk**\n **- Announcement**\n **- Mute**\n **- Unmute**\n **- Ban**\n **- Unban**\n **- Kick**\n **- Report**\n **- Warning**', inline: true }, { name: '\_\_\*\*\*🔨Utilities!\*\*\*\_\_\_', value: '**- Avatar**\n **- Ping**\n **- Help**' })
            .setFooter(`Requested by ${message.author.username}`, avatar)
            .setColor('BLACK')
            .setImage("https://media.discordapp.net/attachments/741177351739670598/752853825714520084/20200908_133309.gif")
            .setTimestamp()
        return message.channel.send(embed);

    }
}