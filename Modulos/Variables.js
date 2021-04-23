const { Token } = require("./Token.js")
const Discord = require("discord.js");
const Client = new Discord.Client();
const Prefix = "gmg!"

const HelpMenu = new Discord.MessageEmbed()
    .setColor('#1c1c1c')
    .setTitle('Comandos')
    .setAuthor('BLUE-BOT', 'https://cdn.discordapp.com/avatars/719565192928690316/aeb9d7f45bca1a33eb5ae0a027fb4ab4.png?size=4096')
    .setDescription('1. gmg!help: :question: este comando te dice que otros comandos hay y como usarlos.\n2. ping: :ping_pong: te dice el PING al server.\n3. gmg!yt: :arrow_forward: El canal de Youtube de @Gomgo_Discord#8012\n4. teniendo en cuenta que soy un poco Troll :clown: te ayudare cuando digas ‟no se”\n5. gmg!saludodellegada: en caso de que quieras ver mi discurso de presentacion usa este comando\n6. gmg!discord: el Discord de jugadores Oficial y Por Temporadas\n7. -help `command`: substituye command por cualquiera de los comando de esta lista para recivir info del comando en concreto\n8. gmg!creator : Informacion sobre mi Canal de Youtube y mi persona')
    .setFooter('Creado por Gomgo', 'https://cdn.discordapp.com/avatars/694578441407954966/5957c8ae5b5eae0edf4ad85531b75f6d.png?size=4096');

module.exports = { Discord, Client, Prefix, Token, HelpMenu }