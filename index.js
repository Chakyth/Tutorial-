

//Hey welcome to my first tutorial
//Now we learn how to create a bot.
//(Simple)










































//discord database
const Discord = require('discord.js')  //or npm install discord.js


//define that your Client is a Bot
const client = new Discord.Client();

//Login the Bot
client.login('ODYyNzM5MDM0OTUwNDY3NjU0.YOcuVg.kXWOmyfOlfUedFHTCjIpy2KZhn8')


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


//Your Bot should be online



//Next Video: How to keep your Bot alive and your first cmd