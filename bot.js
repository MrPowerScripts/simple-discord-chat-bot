import Discord from 'discord.js'
import config from './config.json'


// choose the enviroment variables as config if they exist
let { 
      DISCORD_TOKEN,
    } = process.env

if (DISCORD_TOKEN){ config.discordToken = DISCORD_TOKEN}

console.log(process.env.NODE_ENV)

// THIS IS THE MAGIC RIGHT HERE YA'LL
function bot() {
  // Initialize Discord Bot
  let bot = new Discord.Client();

  bot.on('message', msg => {
      // don't talk to other bots
      if (msg.author.bot) return;
  
      // Also good practice to ignore any message that does not start with our prefix, 
      // which is set in the configuration file.
      if (msg.content.indexOf('!') !== 0) return;

      // parse the chat message to get the command that was run
      let args = msg.content.substring(1).split(' ')
      let cmd = args[0]
      args = args.splice(1)

      switch(cmd) {
        // check to see if the bot is alive
        case "ping":
          msg.reply('pong')
          break
        default:
      }
  });

  bot.login(config.discordToken)
}

process.on('SIGINT', () => {
    process.exit()
})

bot()