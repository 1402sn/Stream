const { Client, RichPresence } = require('discord.js-selfbot-v13');
const express = require('express');
const app = express();
const bot = new Client({ checkUpdate: false });


const textmain = "";
const textthree = "";
const textfour = "";
const type = "STREAMING";
const pictureGede = [
"https://cdn.discordapp.com/attachments/1151373013749596243/1201197868241932378/cd967dadf7e068180499dd0c76124cbf.gif?ex=65c8f1b0&is=65b67cb0&hm=4d2dd0dea5547a9ec4c54637f90a7f6b04e92a6d02fe5c48afd345efcaa113f7&",
                         ];
const smallpictureGede = [
  "https://cdn.discordapp.com/attachments/1151373013749596243/1201198369444466748/138e40b3cdca2ecfc509b64d4e7938ec.gif?ex=65c8f228&is=65b67d28&hm=f8dd78fae0164d7b17fec464c79fc11d9a4b7bfc71cd7430626085c475da4362&",
                    ];
const nameButtonone = "";
let linkButtonone = "";

const xxxx = ['★☆★☆★☆★','☆★☆★☆★☆'];

const randomTexts = [
  'FaceBook',
  

];

const randomtext3 = [
  '𝑠𝑝𝑎𝑟𝑘𝑙𝑖𝑛𝑔 𝑒𝑚𝑜𝑡𝑖𝑜𝑛',
  '𝑡𝑜𝑚𝑜𝑟𝑟𝑜𝑤 𝑥 𝑡𝑜𝑔𝑒𝑡ℎ𝑒𝑟',
  '𝑖𝑛𝑡𝑒𝑟𝑐𝑜𝑛𝑛𝑒𝑐𝑡𝑒𝑑',
  '𝑢𝑛𝑡𝑖𝑡𝑙𝑒𝑑'
  
];

const randomtext4 = [
  'Spotify',
  

];

const randomtext5 = [];

const randomLinks = [
  "https://open.spotify.com/user/31i4xf46bf27yxva4fusedgdawau",
  "https://www.facebook.com/phuong.ahnz/",
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
    const resultthree = "???"


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
      .setName(`!!!`)
      .setURL('https://www.youtube.com/watch?v=XALYHA2OUSE')
      .setType(`${type}`.toUpperCase())
      .setApplicationId("1150458998433271951")
      .setAssetsLargeImage(`${rdpictureGede}`)
      .setAssetsSmallImage(`${rdsmallpictureGede}`)
      .setAssetsLargeText(`
🌡${roundedNumber} °C ⋆ 🍃 ${roundwNumber} m/s`)
      .setAssetsSmallText(`ping: ${bot.ws.ping}ms`)
      .setState(`: ${randomXX}`)
      .setDetails(`${randomButtonText3}`)
      .setStartTimestamp(timestamps.timestampMidnight)
      .setEndTimestamp(timestamps.timestampEndOfDay)
      .addButton(`${randomButtonText}`, `${linkButtonone}`)
      .addButton(`${randomButtonText4}`, `${linkButtonone}`)
    bot.user.setActivity(pr.toJSON());
  }, getRandomInt(1000, 3000));
  console.log(`${bot.user.tag} Status is showed up !!`);
});

bot.login(process.env['TOKEN']);
