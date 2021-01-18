const Discord = require('discord.js');
const db = require("quick.db");
const config = require("../../config.json");

exports.run = async (client, message, args) => {
   

    let bakiye = await db.fetch(`para_${message.author.id}`) || 0
    var user = ""
    let member = message.mentions.users.first() || message.client.users.cache.get(args[0]);
          let author = message.author;
          if(member) {
               var user = member;
          } else {
               var user = author;
          }   
    
      member = message.guild.member(user);
      
    const embed = new Discord.MessageEmbed()
    .setAuthor(user.tag, user.avatarURL({dynamic:true}))
    .setColor('YELLOW')
    .setDescription(`Bakiye: ${bakiye} Galleon`)
    .setFooter('Powered By Arselis')
    .setImage(`https://cdn.discordapp.com/attachments/789304988181463051/800076772129505290/tenor.gif`)
     message.channel.send(embed)

}


exports.conf = {
    enabled: true,
    aliases: ["bakiye"],
    permLevel: 0
}

exports.help = {
    name: "bakiyem",
    usage: "bakiyem"
}