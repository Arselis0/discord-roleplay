const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    if (args[0] == "kullanıcı") {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({size: 1024, dynamic:true, formag: 'png'}))
        .setColor('BLACK')
        .setDescription(`**__❯ Kullanıcı Komutları__**\n**!bakiyem -** Bakiyenizi gösterir.\n**!profil -** Etiketlediğiniz/Sizin bilgilerinizi gösterir.\n**!para-gönder -** Etiketlediğiniz kişiye belirttiğiniz miktarda para gönderir.\n**!haftalık -** Haftalık Galleon verir.`)
        .setFooter('Powered By Arselis')
        return message.channel.send(embed)
    } 
    if (args[0] == "yetkili") {
        const embed1 = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL({size: 1024, dynamic:true, formag: 'png'}))
        .setColor('BLACK')
        .setDescription(`**__❯ Yetkili Komutları__**\n**!para-ekle -** Etiketlediğiniz kişiye sınırsız miktarda para gönderir.\n**!para-sıfırla -** Etiketlediğiniz kişinin tüm parasını sıfırlar.`)
        .setFooter('Powered By Arselis')
        return message.channel.send(embed1)
    } 

    if (!args[0]) {
        const embed11 = new Discord.MessageEmbed()
           .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
            .setColor("BLACK")
            .addField("**__Kullanıcı Komutları__**", `\`!yardım kullanıcı\``, true)
            .addField("**__Yetkili Komutları__**", `\`!yardım yetkili\``, true)
            .setFooter('Powered By Arselis')
            .setThumbnail(message.client.user.avatarURL({size: 1024, dynamic:true, formag: 'png'}))  
        return message.channel.send(embed11)};

}
exports.conf = {
    enabled: true,
    aliases: ["yardım"],
    permLevel: 0
}
exports.help = {
    name: "yardım"
}