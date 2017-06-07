const actions = require('./actions');
const elements = require('./locators');

async function testRun() {
  actions.getPage();
  return actions.getPageSource();
};

testRun();