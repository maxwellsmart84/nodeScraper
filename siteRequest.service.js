const rp = require('request-promise');
const casper = require('casper').create();
const cheerio = require('cheerio');

const url = 'https://www.hotslogs.com/Sitewide/HeroAndMapStatistics';

const daysOfTheWeekSelections {

}



// const baseFormData = {
//   ctl00$MainContent$ComboBoxReplayDateTime:
//   ctl00_MainContent_ComboBoxReplayDateTime_ClientState:
//   ctl00$MainContent$ComboBoxLeague:
//   ctl00$MainContent$ComboBoxMapName:
//   ctl00$MainContent$ComboBoxGameLength:
//   ctl00$MainContent$ComboBoxCharacterLevel:
//
// }
//
// const clientState = {
//   logEntries: [],
//   value: '',
//   text: '',
//   enabled: true,
//   checkedIndicies:[],
//   checkItemsTextOverFlows: false,
// }

async function selectDateTime(selection) {
  casper.start('https://www.hotslogs.com/Sitewide/HeroAndMapStatistics', () => {
    this.fill('form#ctl01'. {
      
    })
  })
    this.fill('form#ctl01')
    this.evaluate(() => {

    })
  const input = document.querySelector('#ctl00_MainContent_ComboBoxReplayDateTime_Input');
  input.setAttribute('')

}
async function chooseDropDown(dropDownName) {

}

casper.then(function(){
    this.click("._time._hours");
    this.evaluate(function() {
        var form = document.querySelector('.form-control');
        form.selectedIndex = 2;
        $(form).change();
    });
});
