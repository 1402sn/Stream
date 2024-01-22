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
    .setState('Belive in yourself, and that all you have!')
    .setName('Solly')
    .setDetails(`Sollyy [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1116694463658598412/1198858578916814898/images.jpg?') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('💀') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/attachments/1116694463658598412/1198643177129775215/600ac0f84c54fbf4c3fe110db59f4d9c.jpg?') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('🐧') //Text when you hover the Small image
    .addButton('Ｗａｔｃｈ 👀', 'https://youtube.com/playlist?list=PL954J2wbiE1_Q-UzsL96dbvEQpmVrqAWO&si=m4BPSEUZT728ENyb')
    .addButton('Ｈｅｌｌ 👹', 'https://discord.com/invite/vn-g');

  client.user.setActivity(r);
  client.user.setPresence({ status: "online" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` [${newTime}] Sollyy`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
