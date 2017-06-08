const rp = require('request-promise');
const casper = require('casper').create();
const cheerio = require('cheerio');
const Horseman = require('node-horseman');

const url = 'https://www.hotslogs.com/Sitewide/HeroAndMapStatistics';

// const daysOfTheWeekSelections {
//
// }

const pageMapping = {
  dateAndTime: 'ctl00_MainContent_ComboBoxReplayDateTime'
}

async function selectDropDown(selection) {
  const horseman = new Horseman();
  horseman.open(url)
  .click('span#ctl00_MainContent_ComboBoxReplayDateTime_Arrow')

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
    casper.then(() => {
      casper.waitForSelector('form#ctl101' ,() => {
        this.fillSelectors('form#ctl101'), {
          'input[name=MainContent_DropDownGameMode_ClientState]': selection,
        } ,true);
      });
    })
    .then((data) => {
      console.log(data);
      return data;
    })
  });
}

selectDateTime('Last 7 Days');
// casper.then(function(){
//     this.click("._time._hours");
//     this.evaluate(function() {
//         var form = document.querySelector('.form-control');
//         form.selectedIndex = 2;
//         $(form).change();
//     });
// });
