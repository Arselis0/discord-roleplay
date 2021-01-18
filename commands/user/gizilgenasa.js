const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('ms')
const moment = require("moment");

exports.run = async (client, message, args) => {

    const gizilgenasaarol = '800133462962733057' 
var user = ""
let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
let bakiye = await db.fetch(`para_${message.author.id}`)
  let author = message.author;
if(member) {
     var user = member;
} else {
     var user = author;
}   

if (bakiye < 200) return message.channel.send(`❌ Bakiyen 200 Galleon'dan az. `)

const embeeed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({dynamic:true}))
.setColor('RANDOM')
.setDescription(`<@&800133462962733057> Rolü verilip 200 Galleon kesildi.`)
.setFooter('Powered By Arselis')
.setImage(`https://cdn.discordapp.com/attachments/789305179752497183/800138441203122236/tenor.gif`)
message.channel.send(embeeed)
message.member.roles.add("800133462962733057")
db.add(`para_${message.author.id}`, -200)

}
exports.conf = {
    enabled: true,
    aliases: ["gizilgenasa"],
    permLevel: 0
}
exports.help = {
    name: "gizilgenasa"
}