const rp = require('request-promise');
const cheerio = require('cheerio');
const Horseman = require('node-horseman');
const Promise = require('bluebird');

const horseman = new Horseman();
const url = 'https://www.hotslogs.com/Sitewide/HeroAndMapStatistics';

// const daysOfTheWeekSelections {
//
// }

// const pageMapping = {
//   dateAndTime: 'ctl00_MainContent_ComboBoxReplayDateTime'
// }
//
// async function selectDropDown(selection) {
//   const horseman = new Horseman();
//   horseman.open(url)
//   .click('span#ctl00_MainContent_ComboBoxReplayDateTime_Arrow')
//
// }
// const phantom = require('phantom');
//
// function clickSelected(listIndex, checkBoxIndex) {
//   const $listArray = $('.rcbList');
//   $listArray[listIndex].forEach(($item) => {
//     $item.find('input[type=checkbox]')
//   })
//
//   })
//   return $('.rcbList li').each((index) => {
//     this[index].find('input[type=checkbox]').click();
//   })
// }


async function selectData(listIdx, checkboxIdx) {
  let newData;
  horseman
    .open(url)
    .click('#ctl00_MainContent_ComboBoxMapName_Arrow')
    // .text('label')
    // .evaluate(function(list) {
    //   $('.rcbList');
    //   return array
    // }, array)
    // .value('.rcbList',)
    .click(`.rcbList:eq(${listIdx}) li:eq(${checkboxIdx}) input`)
    .click('#ctl00_MainContent_ComboBoxMapName_Arrow')
    .wait(1000)
    // .on('resourceReceived', (msg) => {
    //   console.log(msg)
    // })
    .html('#__0')
    .then((data) => {
      newData = data.toString();
      console.log('INSIDE PROMISE', newData)
      return newData;
    })
    .close();
}

function test(liIdx, chkIdx, cb) {
  cb(liIdx, chkIdx);
}

test(0, 0, selectData);



//
// async function selectDateTime(selection) {
//
// }
//
//
// async function setDropDown()

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
//
// async function selectDateTime(selection) {
//   casper.start('https://www.hotslogs.com/Sitewide/HeroAndMapStatistics', () => {
//     casper.then(() => {
//       casper.waitForSelector('form#ctl101', () => {
//         this.fillSelectors('form#ctl101'), {
//           'input[name=MainContent_DropDownGameMode_ClientState]': selection,
//         } ,true);
//       });
//     })
//     .then((data) => {
//       console.log(data);
//       return data;
//     })
//   });
// }
//
// selectDateTime('Last 7 Days');
// casper.then(function(){
//     this.click("._time._hours");
//     this.evaluate(function() {
//         var form = document.querySelector('.form-control');
//         form.selectedIndex = 2;
//         $(form).change();
//     });
// });
