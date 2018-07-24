const puppeteer = require('puppeteer'); 
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
const Scraper = require('./scraper')

// CODE STARTS HERE

function Index() { 
}

Index.prototype.runInfiniteScrollPagination = async (url,filename) => {
    // Set up browser and page.
    let scraperObject = new Scraper();
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 926 });
    await page.goto(url);
    const items = await scraperObject.scrapeInfiniteScrollItems(scraperObject,page, scraperObject.scrapeData, 100);
    fs.writeFileSync(`./${filename}`, items);
    await browser.close();
  }

Index.prototype.runPageWisePagination = async (scraperObject,url,filename,maxPagesToScrap) => {
    var combinedDataList = {}
    for (let offsetValue = 0; offsetValue < maxPagesToScrap; offsetValue+=1) {
        newUrl = url.split('offset')[0]+ `offset=${offsetValue*15}` ;
        console.log(newUrl);
        const res = await  scraperObject.WebListscraper(newUrl);
        combinedDataList[offsetValue+1] = res;
        if (offsetValue+1 == maxPagesToScrap){
            fs.writeFileSync(`./${filename}`, JSON.stringify(combinedDataList))
            console.log("Data is Saved!")
            return combinedDataList
        }
    }
}


module.exports = Index;




