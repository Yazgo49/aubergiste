    const Discord = require('discord.js');
    const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')

    const adapter = new FileSync('database.json')
    const db = low(adapter);

    db.defaults({ xp: []}).write()
 
    var bot = new Discord.Client();
    var prefix = ("/");
    var randnum = 0;
 
    bot.on('ready', () => {
        bot.user.setPresence({ game: { name: 'gérer le serveur.', type: 0}});
        console.log("Bot Ready !");
    });
 
    bot.login('NDE3NDUwMDczMTExMjY1Mjgw.DXTMRQ.qAYrmm4QqLZYooNotUdHqxD74gE');

//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃CLEAR▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃CLEAR▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃CLEAR▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
 
    bot.on('message', message => {
 
        // Variables - Variables make it easy to call things, since it requires less typing.
        let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
        let sender = message.author; // This variable takes the message, and finds who the author is.
        let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
        let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.
 
        // Commands
 
        // Ping
        if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.
 
            // Now, let's send a response.
            message.channel.send('Ping!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.
 
        }
 
 
        // Purge
        if (msg.startsWith(prefix + 'CLEAR')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
            // We have to wrap this in an async since awaits only work in them.
            async function purge() {
                message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.
 
                // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
                if (!message.member.roles.find("name", "ClearPower")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                    message.channel.send('Tu ne possèdes pas le grade nécessaire pour cette commande !'); // This tells the user in chat that they need the role.
                    return; // this returns the code, so the rest doesn't run.
                }
 
                // We want to check if the argument is a number
                if (isNaN(args[0])) {
                    // Sends a message to the channel.
                    message.channel.send('Mettez un nombre. \n Utilise : ' + prefix + 'clear <nombre>'); //\n means new line.
                    // Cancels out of the script, so the rest doesn't run.
                    return;
                }
 
                const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
                console.log(fetched.size + ' ...'); // Lets post into console how many messages we are deleting
 
                // Deleting the messages
                message.channel.bulkDelete(fetched)
                    .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
 
            }
 
            // We want to make sure we call the function whenever the purge command is run.
            purge(); // Make sure this is inside the if(msg.startsWith)
 
        }
    });

//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃COMMANDES▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃COMMANDES▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃
//▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃COMMANDES▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃▃


 
    bot.on('message', message => {
        if (message.content === prefix + "ping"){
            message.channel.sendMessage("pong");
            console.log('ping pong');
        }
 
        if (message.content === prefix + "vip"){
            message.author.sendMessage("__**Pour devenir VIP, tu dois inviter 5 personnes avec ce message :**__ \n \n═══════════๑۩۞۩๑═══════════ \n➤  Bonjour à toi ! Je te présente un nouveau serveur Discord, qui est en faite une Auberge, ou tu peux venir pour discuter, jouer,  prendre un verre, ou faire du rp, mais surtout, jouer au jeu : Les Loups-Garous de Thiercelieux. Il y a un bot privée pour gérer le Discord ainsi qu'un autre (encore privé), pour gérer les parties de Loup-Garou. Mais tu peux trouver aussi d'autres Bot pour écouter de la musique ou encore pour le fun ! Nous serons très ravis que tu vienne t'asseoir dans cette chaleureuse auberge ou il fait bon vivre pour t'amuser avec nous et l'aubergiste ! \n \n:point_right: Serveur en Beta. \n:point_right: Une communauté soudée dont tu ne te lasse jamais et ou ne trouveras pas le moyen de t'ennuyer. \n:point_right: Un Staff compétent (recrutement staff [ON]). \n:point_right: Des events. \n:point_right: Des games de Loup-Garou H24 ! \n \n:arrow_forward: Le lien : https://discord.gg/NcHREx8 \n \nNous t'attendons auprès du feu ! \n═══════════๑۩۞۩๑═══════════");
        }
 
        if (message.content === prefix + "membres"){
            var membres_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField("Nombres de personnes sur le serveur :", ""+ message.guild.memberCount +" membres")
            message.channel.sendEmbed(membres_embed);
        }
 
        if (message.content === prefix + "help"){
            var help_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .addField("Voici la liste des commandes :", "- /help : Affiche la liste des commandes. \n- /ping : pong. \n- /vip : Comment devenir VIP (Gratuit). \n- /membres : Voir le nombre de personnes sur le Discord. \n- /xp : Pour voir ton xp.")
            message.channel.sendEmbed(help_embed);
        }
    });

    bot.on('message', message => {

        var msgauthor = message.author.id;

        if(message.author.bot)return;

        if(!db.get("xp").find({user: msgauthor}).value()){
            db.get("xp").push({user: msgauthor, xp: 1}).write();
        }else{
            var userxpdb = db.get("xp").filter({user: msgauthor}).find('xp').value();
            console.log(userxpdb);
            var userxp = Object.values(userxpdb)
            console.log(userxp);
            console.log(`Nombre d'xp : ${userxp[1]}`)

            db.get("xp").find({user: msgauthor}).assign({user: msgauthor, xp: userxp[1] += 1}).write();
        }

        if (message.content === prefix + "xp"){
            var xp = db.get("xp").filter({user: msgauthor}).find('xp').value()
            var xpfinal = Object.values(xp);
            var xp_embed = new Discord.RichEmbed()
                .setColor('#C03000')
                .setTitle(`XP de ${message.author.username}`)
                .setDescription("Voici toute ton XP mon jeune-homme !")
                .addField("XP :", `${xpfinal[1]} xp`)
            message.channel.send({embed: xp_embed});
        }


    })


    bot.on("guildMemberAdd", member => {
        let Role = member.guild.roles.find("name", "Visiteurs");
        member.guild.channels.find("name", "welcome").send(`:grey_exclamation: **${member.user.username}** vient d'arriver sur le serveur ! Souhaitez lui la bienvenue !`)
        member.addRole(Role)
    })

    bot.on("guildMemberRemove", member =>{
        member.guild.channels.find("name", "welcome").send(`:exclamation: **${member.user.username}** vient de quitter le serveur ! RIP...`)
    })
