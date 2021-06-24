const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('help')
            .setTitle('help')
            .setDescription('Toutes les commandes du bot')
            .setColor('RANDOM')
            .addField('.help : affiche ce message',true)
            .addField('.oof : envoie "oof" dans le chat',true)
            .addField('.ban : banni le membre mentionné ',true)
            .addField('.unban : débanni le membre mentionné',true)
            .addField('.unmute : rend la parole au membre muet mentionné',true)
            .addField('.mute : rend muet le membre mentionné',true)
            .addField('.kick : expulse le membre mentionné',true)
            .addField('.tempban : banni temporairement un membre',true)
            .setAuthor('Commandes de Luminarity')
            .setFooter('Luminarity')
            .setTimestamp())
    },
    name: 'help'
}