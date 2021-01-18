const config = require('../config.json');
const db = require('quick.db');
const prefix = require("../config.json")

module.exports = async message => {

  let prefix;
  if (db.has(`prefix_${message.guild.id}`) === true) {
    prefix = db.fetch(`prefix_${message.guild.id}`)
  } 
    
  if (db.has(`prefix_${message.guild.id}`) === false) {
    prefix = config.prefix
  }

  

  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};