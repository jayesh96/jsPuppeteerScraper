const puppeteer = require('puppeteer'); 

class scraper { 
    constructor(){
        this.scrapeData = ( ) => {
            // initialize hotels array
            let scrapedData = [];
            // scraped data List Fetched as an array
            // let dataList = document.querySelectorAll('div.media.list_media');
            // For Booking.com
            let dataList = document.querySelectorAll('div.sr_property_block[data-hotelid]');
            // iterating over each element
            dataList.forEach((element) => {
                let dataJson = {};
                try {
                    // dataJson.name = element.querySelector('h2.media-heading').innerText;
                    // For Booking.com
                    dataJson.name = element.querySelector('span.sr-hotel__name').innerText;
                    dataJson.reviews = element.querySelector('span.review-score-widget__subtext').innerText;
                    dataJson.rating = element.querySelector('span.review-score-badge').innerText;
                }
                catch (exception){
                    console.dir(' Exception Occured ');
                    console.dir(exception);
                }
                scrapedData.push(dataJson);
            });
            // return scraped data list json 
            return scrapedData;
        };

        this.WebListscraper = async (scraperObject,url) => {
            const browser = await puppeteer.launch({ headless: false}); // initates a new browser (default is true)
            const page = await browser.newPage();
            await page.goto(url); // redirects to a new url and open a new page
            let hotelList = await page.evaluate(scraperObject.scrapeData); // evaluate and scrape data 
            browser.close();  
            return hotelList;
        };

        this.scrapeInfiniteScrollItems = async (scraperObject,page, itemTargetCount, scrollDelay) => {
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
            } catch(exception) { }
            return  JSON.stringify(items);
          };
        
    }
}

module.exports = scraper;
