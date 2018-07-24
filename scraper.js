const puppeteer = require('puppeteer'); 
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

function Scraper() { 
}

Scraper.prototype.scrapeData = ( ) => {
    // initialize hotels array
    let scrapedData = [];
    // hotels List Fetched as an array
    let dataList = document.querySelectorAll('div.media.list_media');
    
    // For Booking.com
    // let dataList = document.querySelectorAll('div.sr_property_block[data-hotelid]');
    
    // iterating over each hotel
    dataList.forEach((element) => {
        let dataJson = {};
        try {
            dataJson.name = element.querySelector('h2.media-heading').innerText;

            // For Booking.com
            // dataJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
            // dataJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
            // dataJson.rating = hotelelement.querySelector('span.review-score-badge').innerText;
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


  module.exports = Scraper;
