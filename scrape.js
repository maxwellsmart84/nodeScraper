const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const moment = require('moment');
const app = require('express');
const uuid = require('uuid');

const db = require('./db/querys.js');


let timeOfSave;

console.log(db)
//this belongs here
async function updateOrSetHeroData(data) {
  const newData = data;
  const now = new Date()
  const existingHeroes = await db.getHeroes();
  if (existingHeroes.length !== 0 && existingHeroes.length === newData.length) {
    for (let i = 0; i < existingHeroes.length; i++) {
      const hero = existingHeroes[i];
      await db.updateHero(hero.id, hero);
    }
    const updatedHeroes = await db.getHeroes();
    console.log('data updated');
    return updatedHeroes;
  }
  //this is the first time getting data
  console.log('got here');
  for (let i = 0; i < newData.length; i++) {
    newData[i].id = uuid();
    await db.setHero(newData[i]);
  }
  return db.getHeroes();
}

//may want to re-write this to write to disk
async function getHtmlFromPage(url) {
  const html = await rp(url);
  return html;
}

// siteService?
async function fetchFrontPageData() {
  const url = 'https://www.hotslogs.com/Default'
  const html = await getHtmlFromPage(url);
  const $ = await cheerio.load(html);
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
async function getFrontPageData(req, res) {
  let response;
  const lastUpdated = await db.getSiteData();
  const now = new Date();
  //if last time data was updated was 3 hours ago then update, otherwise serve data
  if (isEmptyObj(lastUpdated) || (Math.abs(lastUpdated.timeStamp - now) > 10800000)) {
    const siteData = {
      timeStamp: now,
      err: false,
      page: 'front',
    }
    console.log(siteData);
    await db.setSiteData(siteData);
    const newData  = await fetchFrontPageData();
    response = await updateOrSetHeroData(newData);
    return res.send(response)
  }
  response = await db.getHeroes();
  return res.status(200).send(response);
}


//response service
// function sendResponseData(data){
//   return res.status(200, data)
// }
//''
function sendInternalError(data) {
  return res.send(500, 'Internal Server Error');
}

// utility
function savePage(fileName, pageData) {
  fs.writeFileSync(`${fileName}`, pageData);
}

function isEmptyObj(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

function prettyJson(obj) {
  return JSON.stringify(obj, null, 2);
}

function stripSpecChars(string) {
  return string.replace(/[^\w\s]/gi, '')
}


module.exports = {
  getFrontPageData,
}
