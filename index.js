

//Hey guys today we learn, how to keep a Bot alive
//(with Uptimerobot)











































//discord database
const Discord = require('discord.js')  //or npm install discord.js


//define that your Client is a Bot
const client = new Discord.Client();

//Login the Bot
client.login('ODYyNzM5MDM0OTUwNDY3NjU0.YOcuVg.-yKarzPo55w3tRx3GRAiiIPmXsE')


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




















client.on('message', msg => {

//Define your Prefix 
//Put the Prefix in "YOUR PREFIX"
const prefix = '!' //For next Tutorial
//What is a prefix:
//Thats what is listed before your cmd like ping or help
//Example= <!> !help


})
//Now go to the Developer Portal, then to your Bot and now jump to OAuth
//Go to the Scopes category and click on Bot. Now copy the link that appears
//Put the link in "Search" and invite the bot to a server

































//YOU DID IT!


//Your Bot should be  24/7 online



//Next Video: your first cmd