

//Hey guys today you see my (stupid) way to make Cmd Handler and making the Ping Cmd better











































//discord database
const Discord = require('discord.js')  //or npm install discord.js


//define that your Client is a Bot
const client = new Discord.Client();

//Login the Bot
client.login()


//How do I get the Token:
//1. Go to https://discord.com/developers
//2. Authorize the app
//3. Create an Application
//4. Name your Bot
//5. Jump to Bot
//6. Copy the TOKEN
//Put the Link in "TOKEN-HERE"








//See that you configed this Script to the Bot
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
//Episode2
const express = require('express') //express database
const app = express() //define app
const port = 3000 //define port
app.get('/', (req, res) => res.send('Hello World!')); //in app should be this Text 
  app.listen(port, () =>
        console.log(`Example app listening at http://localhost:${port}`)) //Checking wheter the website is online
        //Your Bot should be online for 45 minutes
        //But how is my Bot 24/7 alive:
        //1. Go to uptimerobot.com
        //2. Log in/Sign in 
        //3. Add Monitor
        //4. Select https
        //5. Paste website Url
        //6. Create Monitor



		
	
	
	
});




















client.on('message', async message  => {

//Define your Prefix 
//Put the Prefix in "YOUR PREFIX"
const prefix = '++' //For next Tutorial
//What is a prefix:
//Thats what is listed before your cmd like ping or help
//Example= <!> !help
const args = message.content
			.slice(prefix.length)
			.trim()
			.split(/ +/); //define args for cmd (Command)
const command = args.shift().toLowerCase();  //define command




//Now go to the Developer Portal, then to your Bot and now jump to OAuth
//Go to the Scopes category and click on Bot. Now copy the link that appears
//Put the link in "Search" and invite the bot to a server





















client.commands = new Discord.Collection();
const fs = require('fs'); //define fs (reading files)
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);

}
if(command === 'ping'){
	
	await client.commands.get('ping').execute(message, args, Discord, client)
	 
}







})



//YOU DID IT!


//Your Bot should be  24/7 online



//Next Video: your first cmd