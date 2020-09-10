module.exports = {
    name: "announcement",
    aliases: ["announ", "annoucemen"],
    desciption: "say command",

    run: async(client, message, args) => {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if (textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}