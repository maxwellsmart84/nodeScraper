const moment = require('moment');
const uuid = require('uuid');
const low = require('lowdb');
const db = low('db.json');


const defaults = db.defaults({ heroData: [], siteData: {} }).write();

//getters
async function getHeroById(id) {
  const data = await db.get('heroData')
    .find({ id })
    .value();
  return data;
}

async function getHeroes() {
  return db.get('heroData')
    .sortBy('winPercentage')
    .value();
}

async function getSiteData() {
  return db.get('siteData')
    .value();
}

//setters
async function setHero(data) {
  await db.get('heroData')
    .push(data)
    .write();

  return getHeroes();
}

//expects an array, only
// async function setHeroes(data) {
//   console.log('inside query setHeroes', data);
//   const newData = data;
//   for (let i = 0; i < newData.length; i++) {
//     newData[i].id = uuid();
//   }
//   await db.set('heroes', newData);
//
//   return getHeroes();
// }

async function updateHero(id, data) {
  return db.get('heroData')
    .find(id)
    .assign(data)
    .write();
}

async function setSiteData(data){
  db.get('siteData')
    .assign(data)
    .write();

  return getSiteData();
}

async function updateSiteData(data) {
  await db.get('siteData')
    .assign(data)
    .write();

  return getSiteData();
}


module.exports = {
  getHeroById,
  getHeroes,
  getSiteData,
  setHero,
  updateHero,
  getSiteData,
  setSiteData,
  updateSiteData,
}
