const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');
const db = require('./db/query')

let timeOfSave;


async function fetchFrontPageData() {
  const $ = cheerio.load(url);
  const heroData = [];
  const heroCount = $('tbody tr').length - 1;

  for (let i = 0; i < heroCount; i++) {
    const data = $(`#__${i}`);
    const hero = {
      name: data.find('td:nth-child(2)').text(),
      gamesPlayed: data.find('td:nth-child(3)').text(),
      gamesBanned: data.find('td:nth-child(4)').text(),
      popularity: data.find('td:nth-child(5)').text(),
      winPercentage: data.find('td:nth-child(6)').text(),
    }
    heroData.push(hero);
  }
}

function updateHeroData(data) {
  const existingHeroes = await db.getHeroes();
  if (existingHeroes && existingHeroes.length === data.length) {
    for (let i = 0; i < existingHeroes.length; i++) {
      const hero = existingHeroes[i];
      await db.updateHero(hero.id, data);
    }
    const updatedHeroes = await constdb.getHeroes();
    console.log('data updated');
    return sendResponseData(updatedHeroes);
  } else {
    //this is the first time getting data
  }
}


async function setSiteData(err, timeStamp) {
  return const siteData = {
    lastUpdated: timesStamp,
    fetchOk: !err ? true : false;
  }
  await db.storeSiteData(siteData);
}

async function getHotsData (req, res) {
    const heroData = [];
    const offlineSite = fs.readFileSync('hotsLogs.html');
    const $ = cheerio.load(offlineSite);
    const heroCount = $('tbody tr').length - 1;

    for (let i = 0; i < heroCount; i++) {
      const data = $(`#__${i}`);
      const hero = {
        name: data.find('td:nth-child(2)').text(),
        gamesPlayed: data.find('td:nth-child(3)').text(),
        gamesBanned: data.find('td:nth-child(4)').text(),
        popularity: data.find('td:nth-child(5)').text(),
        winPercentage: data.find('td:nth-child(6)').text(),
      }
      heroData.push(hero);
    }
    const parsedData = JSON.stringify(heroData);
    // fs.writeFile('wtf.json', parsedData, (err) => {
    //   console.log('File written');
    // });
    //  await request(url, (err ,res, html) => {
    //   if(err) {
    //     throw new Error(err);
    //   } else {
    //     const offlineSite = await fs.readFile('hotsLogs.html');
    //     const $ = cheerio.load(offlineSite);
    //     const tableRow0 = $('#__0').find('img')
     //
    //     fs.writeFile('wtf.html', tableRow0, (err) => {
    //       console.log('File written');
    //     });

      //grabbing their grid class holds all the data = this should be determined by a length eventually


      // for (let i = 0; i <= 66; i++) {
      //   $(`#__${i} td`).filter(()=> {
      //     const data = $(this);
      // // d
      //     console.log(data.children);
      //     // fs.writeFile('output.json' , JSON.stringify(data, null, 4) , (err) => {
      //     //   console.log('file written');
      //     // })
      //     res.send('Check console!')
      // });
      // }
    // }
  // });
  res.send(heroData);
}

function sendResponseData(data){
  return res.send(200, data)
}

function sendInternalError(data) {
  return res.send(500, 'Internal Server Error');
}

function send

function savePage(fileName, pageData) {
  fs.writeFileSync(`${fileName}`, pageData);
}

module.exports = {
  getHotsData,
}
