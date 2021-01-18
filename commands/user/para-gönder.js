const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('ms')

exports.run = async (client, message, args) => {


var member = ""
let user = message.mentions.users.first() || message.client.users.cache.get(args[0]);
let bakiye = await db.fetch(`para_${message.author.id}`)
if(!user) return message.channel.send(`❌ Bir üye etiketle ve tekrar dene.`)

if(user.bot) return message.channel.send(`❌ Bu komutu bir üyede denemelisin.`)
if(user.id == message.author.id) return message.channel.send(`❌ Kendine para gönderemezsin.`)

let paragönderme = args.slice(1).join(' ')
if (!paragönderme) return message.channel.send('❌ Bir miktar gir ve tekrar dene.')

if (isNaN(paragönderme)) return message.channel.send('**❌ Geçerli bir miktar gir ve tekrar dene.**')
if (bakiye < paragönderme) return message.channel.send('**❌ Kendi bakiyenden fazla bir miktar giremezsin.**')

db.add(`para_${user.id}`, paragönderme)
db.add(`para_${message.author.id}`, -paragönderme)
return message.channel.send(`${user} adlı kullanıcıya başarıyla ${paragönderme} Galleon gönderildi.`)

}
exports.conf = {
    enabled: true,
    aliases: ["para-gönder","para-ver","paraver"],
    permLevel: 0
}
exports.help = {
    name: "para-gönder"
}