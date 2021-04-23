const { Discord, Client, Prefix, Token, HelpMenu } = require("./Modulos/Variables.js")

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("BlueBot funcionando con host en Replit \n Version: Alpha 1");   
  res.end(); 
}).listen(8080);

Client.on('ready', () => {
    console.log('Estoy listo!')
    Client.user.setPresence({
        status: "online",
        activity: {
            name: "gmg!help para comandos - BOT EN FASE DE PRUEBAS",
            type: "PLAYING"
        }
    })
})

Client.on('message', message => {
    const args = message.content.slice(Prefix.length).trim().split(' ');
    const command = args.shift()
    if (!message.content.startsWith(Prefix) || message.author.bot || message.channel instanceof Discord.DMChannel ) return;

    switch(command.toLowerCase()){
        case "help":
            message.channel.send(HelpMenu)
            break
        case "saludodellegada":
            message.channel.send("¡¡¡Holaaa @everyone !!!, Soy el nuevo BOT, me encargare de la diversión asegurada del server, ahora que @Gomgo_Discord me ha acabado de programarme puedo empezar a estar activo, aún no tengo juegos pero dentro de poco tendre algúnos divertidos comandos, escribe !help para ver mi funcionamiento, Gracias :D :+1: Espero que te guste el server. Y hasta aquí mi presentación bye :D :vulcan:")
            break
        case "yt":
            message.channel.send("Hola, soy el Bot de BLUE UNITY SCRATCH, ¿¿¿quieres suscribirte a mi canal??? ¡¡¡Pues Aquí lo tienes: https://www.youtube.com/channel/UCS-eLaZN6TYOFgRR8C4sADQ !!!")
            break
        case "discord":
            message.channel.send("Aqui esta el Discord de jugadores oficial https://discord.gg/FMfw3uQ")
        case "newmods":
            message.channel.send("Nuevos Mods en la serie, pasaros por #Mods para verlos y descargarlos")
        case "inf":
            message.channel.send("V.1.5.8.8.9.0.2.4 Ref Nº: 00000001. DP: https://bluebotdiscord.wordpress.com IP: blueunitybot.herokuapp.com Monitored by Uptimerobot.com Powered with: Node.js (https://nodejs.org)   Código de Node.js creado por BLUE UNITY SCRATCH™ Gracias por usar el Bot de Blue-Bot ")
        case "tw":
            message.channel.send("¡¡¡HOLAAAAA!!! en twitch hago muchos mas directos que en youtube, quieres seguirme??? pues el enlaze es https://twitch.tv/gomgo_official")
        case "decir":
            if (message.author.id == "694578441407954966" || message.author.id == "561560432100245520"){
                message.channel.send(message.content.split(' ').splice(1).join(' '))
                message.delete()
            }
        
    }

})
Client.login(Token)
