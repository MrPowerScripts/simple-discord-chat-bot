This is a Nodejs bot. Have at least Node 8 installed.

You need to actually do some setup on discordapp.com before you can run this.

go to: https://discordapp.com/developers/applications/

Create an application. Give it a unique name. On the left side menu click "Bot". Then make the bot. Click "Reveal Token". See that token? That's what goes in the `config.json`. DO NOT SHARE THAT TOKEN WITH ANYONE. Unless you want them to ruin your server. Then feel free to pass it around.

Your bot is now created. Congratulations. Now you need to register it and join it to a server. Click on "General Information" on the left side. See the "Client ID"? Copy that number and put it in the URL bellow where it says CLIENT_ID. Make sure to remove the `< >` as well.

`https://discordapp.com/oauth2/authorize?client_id=<CLIENT_ID>&scope=bot`

After you've crafted the URL put it back into the browser perform the authentication steps and tell it what server to join. After all this you should see the bot in the server user list. It will have `BOT` next to it's name.

Now install the project dependencies of this repo.

`npm install`

Once everything is installed you can run the bot in development mode (`npm run dev`) or development watch mode, which reloads the bot automatically when you change `bot.js` (`npm run watch`). You can also star the bot in regular mode using (`npm run start`). This starts a conpiled version in a background process. You can stop the process using (`npm run stop`).

When you have one of those running the bot will be online in your channel waiting to respond.