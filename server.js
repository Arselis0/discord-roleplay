const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const { prefix, offic_arselis } = require("./config.json");
const AsciiTable = require('ascii-table');
const fs = require("fs");
const request = require("request");
const ms = require("parse-ms");
require('./util/eventHandler.js')(client);
const db = require("quick.db");
let tarih = new Date().toLocaleString("tr-TR", { timeZone: "Asia/Istanbul"});
const nodemailer = require("nodemailer");


var commandtable = new AsciiTable('Arselis Command Table');


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



commandtable.setHeading("Command", 'Status', "Aliases")
fs.readdirSync('./commands').forEach(dir => {
const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const komutcuklar = require(`./commands/${dir}/${file}`);

  if (komutcuklar.help.name) {
  client.commands.set(komutcuklar.help.name, komutcuklar);
  commandtable.addRow(komutcuklar.help.name, "✔️", komutcuklar.conf.aliases)
} else {
  commandtable.addRow(komutcuklar.help.name, "❌")
  continue;
    }


    
    komutcuklar.conf.aliases.forEach(alias => {
      client.aliases.set(alias, komutcuklar.help.name);
    });
  }
})
console.log(commandtable.toString())


client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === offic_arselis) permlvl = 4;
  return permlvl;
};

// Kısa bir formüldür.

    Date.prototype.toTurkishFormatDate = function (format) {
        let date = this,
        day = date.getDate(),
        weekDay = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hours = date.getHours()+3,
        minutes = date.getMinutes(),
        seconds = date.getSeconds()
        let monthNames = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık")
        let dayNames = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi")
        if (!format) {
            format = "dd MM yyyy, hh:ii"
        };
        format = format.replace("mm", month.toString().padStart(2, "0"))
        format = format.replace("MM", monthNames[month])
        if (format.indexOf("yyyy") > -1) {
            format = format.replace("yyyy", year.toString())
        } else if (format.indexOf("yy") > -1) {
            format = format.replace("yy", year.toString().substr(2, 2))
        };
        format = format.replace("dd", day.toString().padStart(2, "0"))
        format = format.replace("DD", dayNames[weekDay])
        if (format.indexOf("HH") > -1) {
            format = format.replace("HH", hours.toString().replace(/^(\d)$/, '0$1'))
        };
        if (format.indexOf("hh") > -1) {
            if (hours > 24) {
                hours -= 24
            };
            if (hours === 0) {
                hours = 24
            };
            format = format.replace("hh", hours.toString().replace(/^(\d)$/, '0$1'))
        };
        if (format.indexOf("ii") > -1) {
            format = format.replace("ii", minutes.toString().replace(/^(\d)$/, '0$1'))
        };
        if (format.indexOf("ss") > -1) {
            format = format.replace("ss", seconds.toString().replace(/^(\d)$/, '0$1'))
        };
        return format;
    };
    


client.login(config.token);