const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('parse-ms')
const moment = require("moment");

exports.run = async (client, message, args) => {

    let bakiye = await db.fetch(`para_${message.author.id}`)

    let user = message.author;
    let timeout = 604800;
    

    var haftalık = ['200'];
    var haftalık = haftalık[Math.floor(Math.random() * haftalık.length)];

    let yavaşmod = 8.64e+7, // 24 saat 
    amount = 200;
    let lastWeek = await db.fetch(`haftalik_${message.author.id}`)
    if (lastWeek !== null && yavaşmod - (Date.now() - lastWeek) > 0) {

    let timeObj = ms(yavaşmod - (Date.now() - lastWeek));
    return message.channel.send(`:boom: Haftada bir kez Galleon alabilirsin.`)

    } else {
        db.add(`para_${message.author.id}`, haftalık)
        const haftalikemb = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
        .setColor('RANDOM')
        .setDescription(`Haftalık ${amount} Galleon ödülünü başarıyla aldın.`)
        .setFooter('Powered By Arselis')
        .setImage(`https://cdn.discordapp.com/attachments/789305179752497183/800163733980577802/tenor.png`)
        message.channel.send(haftalikemb)
    }
    db.set(`haftalik_${message.author.id}`, Date.now())
}
exports.conf = {
    enabled: true,
    aliases: ["haftalık"],
    permLevel: 0
}
exports.help = {
    name: "haftalık"
}