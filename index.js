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
    .setApplicationId('1198857147350515803')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=ZAPi_WGreGM') //Must be a youtube video link 
    .setState(null)
    .setName('Solly')
    .setDetails(`Sollyy ﹝⏳ ${formatTime()}﹞`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1201399307279015936/mob-psycho100-mob-psycho.gif?') //You can put links in tenor or discord and etc.
    .setAssetsLargeText(null) //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1201441749449580564/8ec5250af4bd070ad53cb3e8b32cf29f.gif?') //You can put links in tenor or discord and etc.
    .setAssetsSmallText(null) //Text when you hover the Small image
    .addButton('📃', 'https://discord.com/invite/UsYZRFFfrK')
    .addButton('👀', 'https://www.facebook.com/solly1402');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Sollyy`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
