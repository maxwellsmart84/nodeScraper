const db = low('db.json');
const moment = require('moment');
const uuid = require('uuid');


const db.defaults({ heroData: [], siteData: {} }).write();

//getters
async function getHeroById(id) {
  const data = await db.get('heroData')
    .find({ id })
    .value();
  return data;
}

async function getHeroes() {
  return db.get('heroData')
    .value();
}

async function getSiteData() {
  return db.get('siteData')
    .value();
}

//setters
async function setHero(data) {
  const newData = data;
  newData.id = uuid();
  newData.timeStamp = new Date();
  const data = await db.get(heroData)
    .push({newData})
    .write();

  const heroData = await db.get('heroData')
    .sortBy('winPercentage')
    .value();
  return heroes;
}

//expects an array, only
async function setHeroes(data) {
  const newData = data;
  for(i = 0; i < newData.length; i++) {
    newData[i],id
  }
  const newData = data;
  newData.id = uuid();
  await db.set('heroes', newData);
  return db.get('heroes')
    .vaule();
}

async function updateHero(id, data) {
  const hero = await getById(id, 'heroes');

  await db.get('heroes')
    .find(hero.id)
    .assign(data)
    .write();

  return getHeroById(hero.id);
}

async function storeSiteData(data){
    await db.set('siteData', data);
}

async function updateSiteData(data) {
  await db.get('siteData')
    .assign(data);
    .write();

  return getSiteData();
}


module.exports({
  getHeroById,
  getHeroes,
  setHero,
  storeHeroes,
  updateHero,
  getSiteData,
})