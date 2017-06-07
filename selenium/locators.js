module.exports = {
  timeFrameDropdown: function timeFrameDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_ComboBoxReplayDateTime_Input'));
  },
  rankingsDropdwon: function rankingsDropdwon(driver, by) {
    return driver.findElement(by.id('ComboBoxLeague_Input'));
  },
  talentsDropdown: function talentsDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_DropDownWinRateByTalent'));
  },
  gameModeDropdown: function gameModeDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_DropDownGameMode'));
  },
  mapDropdown: function mapDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_ComboBoxMapName'));
  },
  gameLengthDropdown: function gameLengthDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_ComboBoxGameLength'));
  },
  charLevelDropdown: function charLevelDropdown(driver, by) {
    return driver.findElement(by.id('ctl00_MainContent_ComboBoxCharacterLevel'));
  },
};
