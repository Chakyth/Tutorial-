module.exports = {
name: 'ping',
description: 'pong!',



execute(message, args, Discord, client)
{
var ping = Date.now() - message.createdTimestamp	
	
const embed = new Discord.MessageEmbed()	
.setTitle('🏓 Pong')
.setDescription(`Latency is ${ping}ms. \nAPI Latency is ${Math.round(client.ws.ping)}ms`)
message.channel.send(embed)	
	
	
	
}

	
	
	
	
	
}
	
	
