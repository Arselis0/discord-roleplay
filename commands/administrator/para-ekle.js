const Discord = require('discord.js');
const config = require('../../config.json');
const db = require('quick.db');
const ms = require('ms');

exports.run = async (client, message, args) => {
 
    if(!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send('❌ Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısınız.')
   
    var member = ""
    let user = message.mentions.users.first() || message.client.users.cache.get(args[0]);
          

    if(!user) return message.channel.send(`❌ Bir üye etiketle ve tekrar dene.`)
    if(!args[0]) return message.channel.send(`❌ Bir miktar gir ve tekrar dene.`)
    if(!(args[1])) return message.channel.send(`❌ Geçerli bir miktar gir ve tekrar dene.`)

    //
    db.add(`para_${user.id}`, args[1])
    //
    let bakiye = await db.fetch(`para_${user.id}`)
    let ars = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({dynamic:true}))
    .setColor('GREEN')
    .setDescription(`✅ ${user} Kullanıcısına ${args[1]} Galleon eklendi.\n\nYeni Bakiyesi: ${bakiye} Galleon`)
    .setFooter('Powered By Arselis')
    return message.channel.send(ars)

}
exports.conf = {
    enabled: true,
    aliases: ["para-ekle"],
    permLevel: 3
}

exports.help = {
    name: "para-ekle",
    usage: "para-ekle"
}