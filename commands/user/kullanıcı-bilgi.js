const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const db = require("quick.db");
moment.locale('tr');
const dateformat = require('dateformat')
config = require("../../config.json");
const prefix = require("../../config.json");

exports.run = async (client, message, args) => {

    var user = ""
  let member = message.mentions.users.first() || message.client.users.cache.get(args[0]);
        let author = message.author;
        if(member) {
             var user = member;
        } else {
             var user = author;
        }   
  
    member = message.guild.member(user);

let p = Object.keys(member.presence.clientStatus).join(',')
let cihazisim = p
.replace(`mobile`,`Mobil`)
.replace(`desktop`,`Bilgisayar`)
.replace(`web`,`İnternet Tarayıcısı`)

let bakiye = await db.fetch(`para_${user.id}`) || 0

const arselismesaj = new Discord.MessageEmbed()
.setAuthor(user.tag, user.avatarURL({size: 1024, dynamic:true}))
.setThumbnail(user.avatarURL({size:1024, dynamic:true}))
.setColor('RANDOM')
.setDescription(`**__❯ Kullanıcı Bilgisi__**\nProfil: ${user}\nID: ${user.id}\nBağlandığı Cihaz: ${cihazisim}\n\n**__❯ Üyelik Bilgisi__**\nSunucu takma adı: ${member.nickname ? `${member.nickname} (${user.tag})` : '[Bulunmuyor]'}\n\Parası: ${bakiye}`)
return message.channel.send(arselismesaj)

} 

exports.conf = {
    enabled: true,
    aliases: ["profil"],
    permLevel: 0
};

exports.help = {
    name: "profil",
    description: "Kullanıcı hakkında bilgi almanızı sağlar",
    usage: "profil <@kullanıcı>"
};