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
    .setApplicationId('1116621382466412614')
    .setType('STREAMING')
    .setURL('https://youtu.be/ZAPi_WGreGM?si=CTCJA53TFT8LeGYW') //Must be a youtube video link 
    .setState('Solly Is Riel=))')
    .setName('Solly Aka Sully')
    .setDetails(`Valorant [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1198612468403023922/6edad89ec8ecc9218cee7ef86e2a8630.jpg?') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Belive in yourself, bro!') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1198612478318350387/42ba2bcfc3e3024b8683f77d0905e623.jpg?') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Maybe its me?') //Text when you hover the Small image
    .addButton('Watch 👀', 'https://youtube.com/playlist?list=PL954J2wbiE1_Q-UzsL96dbvEQpmVrqAWO&si=m4BPSEUZT728ENyb')
    .addButton('Hell 👹', 'https://discord.com/invite/vn-g');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
