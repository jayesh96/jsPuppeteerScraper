const puppeteer = require('puppeteer'); 
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
  
// CODE STARTS HERE

function Scraper() { 
}

Scraper.prototype.scrapeData = ( ) => {
    // initialize hotels array
    let scrapedData = [];
    // hotels List Fetched as an array
    let dataList = document.querySelectorAll('div.media.list_media');
    // iterating over each hotel
    dataList.forEach((dataValue) => {
        let dataJson = {};
        try {
            console.dir(" Hello")
            dataJson.name = element.querySelector('h2.media-heading').innerText;
        }
        catch (exception){
            console.dir(" Exception Occured ")
            console.dir(exception)
        }
        scrapedData.push(dataJson);
    });
    // return hotel list json 
    return scrapedData;
};

Scraper.prototype.WebListscraper = async (url) => {
    const browser = await puppeteer.launch({ headless: true}); // initates a new browser (default is true)
    const page = await browser.newPage();
    await page.goto(url); // redirects to a new url and open a new page
    let hotelList = await page.evaluate(new Scraper().scrapeData) // evaluate and scrape data 
    browser.close();  
    return hotelList
};

Scraper.prototype.scrapeInfiniteScrollItems = async (scraperObject,page, scrapeData, itemTargetCount, scrollDelay = 1000) => {
    let items = [];
    try {
      let previousHeight;
      while (items.length < itemTargetCount) {
        items = await page.evaluate(scraperObject.scrapeData);
        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
        await page.waitFor(scrollDelay);
      }
    } catch(e) { }
    return  JSON.stringify(items);
  };

Scraper.prototype.runInfiniteScrollPagination = async (url,filename) => {
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

Scraper.prototype.runPageWisePagination = async (scraperObject,url,filename,maxPagesToScrap) => {
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


module.exports = Scraper;




