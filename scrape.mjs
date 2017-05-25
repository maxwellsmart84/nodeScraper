

export.getRows = function (req, res) {
    const url = 'https://www.hotslogs.com/Default';
    request(url, (err ,res, html) => {
      if(err) {
        throw new Error(err);
      } else {
        const $ = cheerio.load(html);
        const thing = $('#__0 tr');
        console.log(thing);
      //grabbing their grid class holds all the data = this should be determined by a length eventually
      // for (let i = 0; i <= 66; i++) {
      //   $(`#__${i} td`).filter(()=> {
      //     const data = $(this);
      // // d
      //     console.log(data.children);
      //     // fs.writeFile('output.json' , JSON.stringify(data, null, 4) , (err) => {
      //     //   console.log('file written');
      //     // })
      //     res.send('Check console!')
      // });
      // }

      

      // const heroData = {
      //   hero,
      //   gamesPlayed,
      //   gamesBanned,
      //   popularity,
      //   winPercentage,
      //   change,
      // }
    }
     res = thing;
     return res;
    });
}

export = module.exports = scraper;