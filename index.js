const puppeteer = require('puppeteer'); 
const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));
  
// CODE STARTS HERE

function Scraper() { 
}

Scraper.prototype.scrapHotelData = ( ) => {
    // initialize hotels array
    let hotels = [];
    // hotels List Fetched as an array
    let hotelList = document.querySelectorAll('div.sr_property_block[data-hotelid]');
    // iterating over each hotel
    hotelList.forEach((hotel) => {
        let hotelJson = {};
        try {
            hotelJson.name = hotel.querySelector('span.sr-hotel__name').innerText;
            hotelJson.rating = hotel.querySelector('span.review-score-badge').innerText;
            hotelJson.description = hotel.querySelector('div.hotel_desc').innerText;
            hotelJson.coordinates = hotel.querySelector('a.jq_tooltip').getAttribute('data-coords');
        }
        catch (exception){
            console.dir(" Exception Occured ")
            console.dir(exception)
        }
        hotels.push(hotelJson);
    });
    // return hotel list json 
    return hotels;
};

Scraper.prototype.extractHousingData = () =>{
    const extractedElements = document.querySelectorAll('div.media.list_media');
    const items = [];
  for (let element of extractedElements) {
    let homeJson = {};
    try {
        homeJson.name = element.querySelector('h2.media-heading').innerText;
       
    }
    catch (exception){
        console.dir(" Error Occured ")
        console.dir(exception)

    }
    items.push(homeJson);
  }
  return items;
}

Scraper.prototype.hotelListscraper = async (url) => {
    const browser = await puppeteer.launch({ headless: true}); // initates a new browser session (default is true)
    const page = await browser.newPage();
    await page.goto(url); // redirectts to a new url and open a new page
    let hotelList = await page.evaluate(new Scraper().scrapHotelData) // evaluate and scrape data 
    browser.close();  
    return hotelList
};

Scraper.prototype.scrapeInfiniteScrollItems = async (scraperObject,page, extractHousingData, itemTargetCount, scrollDelay = 1000) => {
    let items = [];
    try {
      let previousHeight;
      while (items.length < itemTargetCount) {
        items = await page.evaluate(scraperObject.extractHousingData);
        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
        await page.waitFor(scrollDelay);
      }
    } catch(e) { }
    return  JSON.stringify(items);
  };

Scraper.prototype.runInfiniteScrollPagination = async (url,filename) => {
    console.log("Hello")
    // Set up browser and page.
    let scraperObject = new Scraper();
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 926 });
    await page.goto(url);
    const items = await scraperObject.scrapeInfiniteScrollItems(scraperObject,page, scraperObject.extractHousingData, 100);
    fs.writeFileSync(`./${filename}`, items);
    await browser.close();
  }

Scraper.prototype.runPageWisePagination = async (scraperObject,url,filename,maxPagesToScrap) => {
    var combinedHotelsList = {}
    for (let offsetValue = 0; offsetValue < maxPagesToScrap; offsetValue+=1) {
        newUrl = url.split('offset')[0]+ `offset=${offsetValue*15}` ;
        console.log(newUrl);
        const res = await  scraperObject.hotelListscraper(newUrl);
        combinedHotelsList[offsetValue+1] = res;
        if (offsetValue+1 == maxPagesToScrap){
            fs.writeFileSync(`./${filename}`, JSON.stringify(combinedHotelsList))
            console.log("Data is Saved!")
            return combinedHotelsList
        }
    }
}


module.exports = Scraper;




