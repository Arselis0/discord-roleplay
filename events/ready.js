const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {
    client.user.setPresence({activity: {name: `Arselis was here`, type: "WATCHING"}, status: "idle"})
     console.log('Bot Aktif!')
   }