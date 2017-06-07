import * as sel from 'selenium-webdriver';

const by = sel.by;
const driver = new sel.Builder().forBrowser('chrome').build();

module.exports = {
  getHtmlString: function getHtmlString() {
    driver.get('https://www.hotslogs.com/Sitewide/HeroAndMapStatistics')
    .then(() => driver.getPageSource())
    .then((src) => {
      return src
    });
  },
};

// module.exports = {
//   login: function login(driver, by, username, password, callback) {
//     LoginPage.usernameInput(driver, by).clear()
//     .then(() => LoginPage.usernameInput(driver, by).sendKeys(username))
//     .then(() => LoginPage.passwordInput(driver, by).clear())
//     .then(() => LoginPage.passwordInput(driver, by).sendKeys(password))
//     .then(() => LoginPage.loginButton(driver, by).click())
//     .then(() => callback())
//     .catch(() => {
//       setTimeout(() => login(driver, by, username, password, callback), 1000);
//     });
//   },
// };