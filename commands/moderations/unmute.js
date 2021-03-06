const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "unmute",
    category: "moderation",
    run: async(client, message, args) => {
        if (!message.member.hasPermission(['ADMINISTRATOR'])) return;
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        if (member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get("739548504266899586");
        let verifiedRole = message.guild.roles.cache.get('739036908885245963');
        if (mutedRole) {
            member.roles.remove(mutedRole);
            member.roles.add(verifiedRole);

            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setTimestamp()
                .setFooter(message.guild.name, message.guild.iconURL)
                .setAuthor("Unmuted Member's", member.user.displayAvatarURL)
                .setDescription(`**> Member: ** ${member}
            **> Muted by: ** ${message.member} (${message.member.id})
            **> From: ** ${message.channel}
            **> Reason: ** Next Time Do The Right Thing's`);
            return channel.send(embed);
        }
    }

}