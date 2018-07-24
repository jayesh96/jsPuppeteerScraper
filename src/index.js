const puppeteer = require('puppeteer'); 
const Scraper = require('./scraper')
const fs = require('fs');

// CODE STARTS HERE

class index{ 
    constructor(){
        this.runInfiniteScrollPagination = async (url,filename) => {
            // Set up browser and page.
            let scraperObject = new Scraper();
            const browser = await puppeteer.launch({
              headless: false,
            });
            const page = await browser.newPage();
            page.setViewport({ width: 1280, height: 926 });
            await page.goto(url);
            const items = await scraperObject.scrapeInfiniteScrollItems(scraperObject,page, 100,1000);
            browser.close();
            fs.writeFile(`./${filename}`, items, function(err) {
                if(err) {
                    return console.log(err);
                }

                return 1
            });

            
          }
    
          this.runPageWisePagination = async (url,filename,maxPagesToScrap) => {
            var scraperObject = new Scraper();
            var combinedDataList = {}
            for (let offsetValue = 0; offsetValue < maxPagesToScrap; offsetValue+=1) {
                url = url.split('offset')[0]+ `offset=${offsetValue*15}`;
                const res = await  scraperObject.WebListscraper(scraperObject,url);
                combinedDataList[offsetValue+1] = res;
                if (offsetValue+1 == maxPagesToScrap){
                    fs.writeFileSync(`./${filename}`, JSON.stringify(combinedDataList))
                    console.log("Data is Saved!")
                    return 1
                }
            }
        }

    }

    

}



module.exports = index;




