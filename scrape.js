const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');
const db = require('./db/query')

let timeOfSave;

//this belongs here
function updateOrSetHeroData(data) {
  const now = new Date()
  const existingHeroes = await db.getHeroes();
  if (existingHeroes && existingHeroes.length === data.length) {
    for (let i = 0; i < existingHeroes.length; i++) {
      const hero = existingHeroes[i];
      await db.updateHero(hero.id, data);
    }
    await setSiteData(now, null);
    await updateSiteData();
    const updatedHeroes = await db.getHeroes();
    console.log('data updated');
    return updatedHeroes;
  } else {
    //this is the first time getting data
    await setSiteData(now, null);
    await db.(data, null)
    return sendResponseData(updated)
  }
}

// siteService?
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
  return heroData;
}

//controller function
async function getFrontPageData() {
  let response;
  const lastUpdated = await db.getSiteData();
  const now = new Date();
  //if last time data was updated was 3 hours ago then update, otherwise serve data
  if (Math.abs(lastUpdate.timeStamp - now) > 10800000) {
    const newData  = await fetchFrontPageData();
    response = await updateOrSetHeroData(newData);
    return sendResponseData(response)
  }
  response = await db.getHeroes();
  return sendResponseData(response);
}


// this belongs here
async function setSiteData(timeStamp, err) {
  return const siteData = {
    lastUpdated: stimesStamp,
    fetchOk: !err ? true : false;
  }
  await db.storeSiteData(siteData);
}

//response service
function sendResponseData(data){
  return res.send(200, data)
}
//''
function sendInternalError(data) {
  return res.send(500, 'Internal Server Error');
}

// utility
function savePage(fileName, pageData) {
  fs.writeFileSync(`${fileName}`, pageData);
}

module.exports = {
  getHotsData,
}
