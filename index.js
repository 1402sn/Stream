const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Ho_Chi_Minh', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1170948236769493052')
    .setType('PLAYING')
    .setURL(null) //Must be a youtube video link 
    .setState('DIscovering...')
    .setName('maso')
    .setDetails(`SoundCloud`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1202869773323599912/Danleech-Simple-Soundcloud.1024.png?') //You can put links in tenor or discord and etc.
.setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1202869804101541888/noun_Learning_2880992.png?')
    .setAssetsLargeText('Music') //Text when you hover the Large image
    .addButton(null)

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `SoundCloud`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);

bot.login(process.env['TOKEN']);
