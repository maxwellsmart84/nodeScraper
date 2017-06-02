const db = low('db.json');
const moment = require('moment');
const uuid = require('uuid');


const db.defaults({ heroes: [], siteData: {} }).write();

//getters
async function getHeroById(id) {
  const data = await db.get('heroes')
    .find({ id })
    .value();
  return data;
}

async function getHeroes() {
  return db.get('heroes')
    .value();
}

//setters
async function storeHero(data) {
  const newData = data;
  newData.id = uuid();
  const data = await db.get(heroes)
    .push({newData})
    .write();

  const heroes = await db.get('heroes')
    .sortBy('winPercentage')
    .value();
  return heroes;
}

//expects an array
async function storeHeroes(data) {
  const newData = data;
  newData.id = uuid();
  await db.set('heroes', newData);
  return db.get('heroes')
    .vaule();
}

async function updateHero(id, data) {
  const newData = data;
  const hero = await getById(id, 'heroes');

  await db.get('heroes')
    .find(hero.id)
    .assign(data)
    .write();

  return getHeroById(hero.id);
}


module.exports({
  getHeroById,
  getHeroes,
  storeHero,
  storeHeroes,
  updateHero,
})
