const puppeteer = require('puppeteer'); 
console.log(puppeteer)
const scraper = require('./scraper')
const fs = require('fs');

// CODE STARTS HERE
class main{ 
    constructor(){
        this.runInfiniteScrollPagination = async (url,filename,callback) => {
            // Set up browser and page.
            let scraperObject = new scraper();
            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            page.setViewport({ width: 1280, height: 926 });
            await page.goto(url);
            const items = await scraperObject.scrapeInfiniteScrollItems(scraperObject,page, 100,1000);
            browser.close();
            fs.writeFile(`./${filename}`, items, function(err) {
                if(err) {
                    return console.log(err);
                }
                return callback({status:1});
            });
        }
        this.runPageWisePagination = async (url,filename,maxPagesToScrap,callback) => {
            var scraperObject = new scraper();
            var combinedDataList = {};
            for (let offsetValue = 0; offsetValue < maxPagesToScrap; offsetValue+=1) {
                // url splitting works only if url contains offset value
                // for some other requirements change is to made
                url = url.split('offset')[0]+ `offset=${offsetValue*15}`;
                const res = await  scraperObject.WebListscraper(scraperObject,url);
                combinedDataList[offsetValue+1] = res;
                if (offsetValue+1 == maxPagesToScrap){
                    fs.writeFileSync(`./${filename}`, JSON.stringify(combinedDataList))
                    console.log('Data is Saved!');
                    return callback({status:1});
                }
            }
        }
    }
}

module.exports = main;




