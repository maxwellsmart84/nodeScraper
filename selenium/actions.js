const sel = require('selenium-webdriver');

const by = sel.by;
const driver = new sel.Builder().forBrowser('chrome').build();

module.exports = {
  // loads the webpage
  getPage: function getPage() {
    driver.get('https://www.hotslogs.com/Sitewide/HeroAndMapStatistics');
  },
  // returns a string representation of the DOM
  getPageSource: function getPageSource() {
    setTimeout(() => {
      driver.getPageSource()
      .then((src) => {
        console.log(src);
        return src;
      });
    }, 8000); // since this doesn't run that often, this should be okay. just playing it safe
  },
};

