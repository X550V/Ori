const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invite",
    cateogry: "utilites",
    run: async(client, message, args) => {
        let bicon = client.user.displayAvatarURL;
        let embed = new MessageEmbed()
            .setDescription("**Hello my name ༺HyperGhost༻, I has been build by TheBlueRose#9697 .\nWant add me to your server?**\n")
            .setAuthor('༺HyperGhost༻ BOT', client.user.avatarURL)
            .addField('▬▬▬▬▬[ 🌟 Link Invite 🌟]▬▬▬▬', `
 > **Support Server**: [\`Klik Disini\`](https://discord.gg/H6sBDHJ)
 > **༺HyperGhost#7729༻ JavaScript Invite **: [\`Klik Disini\`](https://discord.com/api/oauth2/authorize?client_id=652768005213913088&permissions=8&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D652768005213913088%26permissions%3D8%26scope%3Dbot&scope=bot)`)
            .addField('▬▬▬▬[ 🌏 Language 🌏 ]▬▬▬▬', `**\`This Bot Support English/Indonesia \`**`)
            .setColor('BLACK')
            .setFooter('© Created by: TheBlueRose#9697')
        message.channel.send(embed);
    }
}