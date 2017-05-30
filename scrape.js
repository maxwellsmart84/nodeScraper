const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');

let timeOfSave;

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

function savePage(fileName, pageData) {
  fs.writeFileSync(`${fileName}`, pageData);
}

function updateBaseData(fileName) {
  const url = 'https://www.hotslogs.com/Default';
  const now = new Date();
  const threeHours = F
  if (Math.floor((now - timeOfSave)/60000) < 3) {
    const page = await request(url, (req, res, err) => {
    })
    await savePage()
    timeOfSave = moment.now();
  }
}

module.exports = {
  getHotsData,
}
