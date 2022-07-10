const { Client } = require('discord.js-selfbot-v13');
require('dotenv').config()
const client = new Client({checkUpdate: false});
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  //Client Events
client.on("ready", () => {
    console.log(`✅ ${client.user.username} Summoned`);
  })
client.on("ready", async () => {
      const {joinVoiceChannel} = require('@discordjs/voice');
      const channel = client.channels.cache.get("852920574225285130"); // voice channel's id
      if (!channel) return console.log("The channel does not exist!");
      setInterval(() => {
              const connection = joinVoiceChannel({
                  channelId: channel.id, // the voice channel's id
                  guildId: channel.guild.id, // the guild that the channel is in
                  adapterCreator: channel.guild.voiceAdapterCreator // and setting the voice adapter creator
              });
            }, 600)
          });

  let claim = setInterval(() => {
  client.channels.cache.get('993844573900124210').send('test');
}, 60000);
client.login(process.env.TOKEN)


