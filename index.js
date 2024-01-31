const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://media.discordapp.net/attachments/1116694463658598412/1201399281018482799/black-clover-black-clover-movie.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399307279015936/mob-psycho100-mob-psycho.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399329890521138/gojo-six-eyes.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399347066175498/kakashi-obito.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399365948936292/garou-cosmic-garou.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399383355314266/blue-lock-isagi.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201399397582376960/f8f1d39b8527f261926ea4d6ca88c43f.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201473342222368768/vigilante-deku-deku.gif?",
      "https://media.discordapp.net/attachments/1116694463658598412/1201473357409947698/kaneki-stare.gif?",
                         ];
const smallpictureGede = [
"https://media.discordapp.net/attachments/1116694463658598412/1201441749449580564/8ec5250af4bd070ad53cb3e8b32cf29f.gif?",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['★☆★☆★☆★','☆★☆★☆★☆'];

const randomTexts = [
  'FaceBook',
  

];

const randomtext3 = [
  'Solly',
  
];

const randomtext4 = [
  '❡',
  '☬',
  '✞',
  '✡'
  

];

const randomtext5 = [];

const randomLinks = [
  "https://www.facebook.com/dumbohz?mibextid=LQQJ4d",
];


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function getTimestampsForDay(year, month, day) {
  const date = new Date(Date.UTC(year, month, day));
  date.setHours(date.getHours() + 7);
  date.setUTCHours(0, 0, 0, 0);
  const timestampMidnight = date.getTime();
  date.setUTCHours(23, 59, 59, 999);
  const timestampEndOfDay = date.getTime();
  
  return {
    timestampMidnight,
    timestampEndOfDay
  };
}



app.all('/', (req, res) => {
  res.send("NOW GO TO uptimerobot.com AND PASTE THIS URL");
});

app.listen(8080, () => {
  console.log("Server is ready!!");
});

bot.on('debug', (a) => {
  if (a.startsWith("Hit a 429")) process.kill(1);
});

bot.on('ready', async () => {
  setInterval(() => {
    const date = new Date();
    const datee = date.getDate();
    const hours = (date.getHours() + 7) % 24;
    const minutes = date.getMinutes();
    const months = date.getMonth();
    const year = date.getFullYear();
    const timestamps = getTimestampsForDay(year, months, datee);
    function addZero(number) {
  return number < 10 ? "0" + number : number;
}

  function getRandomNumber() {
    return Math.random() * (30 - 20) + 20;
  }
  function getWRandomNumber() {
    return Math.random() * (5 - 3) + 3;
  }
  function roundToDecimal(number) {
    return Math.round(number * 10) / 10;
  }

  const randomNumber = getRandomNumber();
  const roundedNumber = roundToDecimal(randomNumber);
  const roundwNumber = roundToDecimal(getWRandomNumber());
    const month = addZero(months+1);
    const dates = addZero(datee)
    const resultthree = "Badminton"


    // Randomize the link and text for the button
    randomXX = getRandomElement(xxxx);
    rdpictureGede = getRandomElement(pictureGede);
    rdsmallpictureGede = getRandomElement(smallpictureGede);
    const randomButtonText = getRandomElement(randomTexts);
    const randomButtonText3 = getRandomElement(randomtext3);
    const randomButtonText4 = getRandomElement(randomtext4);
    const randomButtonText5 = getRandomElement(randomtext5);
    linkButtonone = getRandomElement(randomLinks);
    const pr = new RichPresence()  
      .setName("Honkai Star Riel")
      .setURL('https://www.youtube.com/watch?v=tE_-be3OnCk')
      .setType(${type}.toUpperCase())
      .setApplicationId("1116621382466412614")
      .setAssetsLargeImage(${rdpictureGede})
      .setAssetsSmallImage(${rdsmallpictureGede})
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(ping: ${bot.ws.ping}ms)
      .setState(: ${randomXX})
      .setDetails(${randomButtonText3})
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(${randomButtonText}, ${linkButtonone})
      .addButton(${randomButtonText4}, ${linkButtonone})
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(${bot.user.tag} Status is showed up !!);
});

bot.login(process.env['TOKEN']);
