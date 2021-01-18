const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
 
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('❌ Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısınız.')
   
    var member = ""
    let user = message.mentions.users.first() || message.client.users.cache.get(args[0]);

    if(!user) return message.channel.send(`❌ Bir üye etiketle ve tekrar dene.`)

    //
    db.delete(`para_${user.id}`) || 0
    //
    let bakiye = await db.fetch(`para_${user.id}`)
    let ars = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({dynamic:true}))
    .setColor('GREEN')
    .setDescription(`✅ ${user} Kullanıcısına tüm parası sıfırlandı.`)
    .setFooter('Powered By Arselis')
    return message.channel.send(ars)

}
exports.conf = {
    enabled: true,
    aliases: ["para-sıfırla","bakiye-sıfırla"],
    permLevel: 3
}

exports.help = {
    name: "para-sıfırla",
    usage: "para-sıfırla"
}