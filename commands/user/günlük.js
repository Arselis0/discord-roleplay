const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('parse-ms')
const moment = require("moment");

exports.run = async (client, message, args) => {

    let bakiye = await db.fetch(`para_${message.author.id}`)

    let user = message.author;
    let timeout = 604800000;
    

    var günlük = ['50'];
    var günlük = günlük[Math.floor(Math.random() * günlük.length)];

    let yavaşmod = 8.64e+7, // 24 Saat
    amount = 50;
    let lastDaily = await db.fetch(`günlük_${message.author.id}`)
    if (lastDaily !== null && yavaşmod - (Date.now() - lastDaily) > 0) {

    let timeObj = ms(yavaşmod - (Date.now() - lastDaily));
    return message.channel.send(`:boom: Her 24 saatte bir Galleon alabilirsin.`)

    } else {
        db.add(`para_${message.author.id}`, günlük)
        message.channel.send(`Günlük ${amount} Galleon ödülünü başarıyla aldın.`)
    }
    db.set(`günlük_${message.author.id}`, Date.now())
}
exports.conf = {
    enabled: true,
    aliases: ["günlük"],
    permLevel: 0
}
exports.help = {
    name: "daily"
}