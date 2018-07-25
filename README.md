# jsPuppeteerScraper
# (Hotels and Housing Property Scraper)
*A Javascript Based Scraper which is used to scrap data from websites using Puppeteer tool.*
*The project can be used for both infinte scrolling as well as page wise scrolling*
*The project is implemented using ES6 guidelines*

# Disclaimer:
*For Educational and Informational Purposes Only*



# Installation 

    git init
    
    git clone https://github.com/jayesh96/jsPuppeteerScraper.git
   
# Install Puppeter
https://github.com/GoogleChrome/puppeteer

    npm i puppeteer
    # or "yarn add puppeteer"

  
# Install Dependencies
    npm install
    npm install -g nodemon

# Start the Server
    node main.js
    
    
# USAGE 
*1 ) Scraper for infinite scrolling*

    node example/example.js --pagination 'infinte_scrolling' --url '<some_url>' --filename 'file_name' --type 'scraper_type' c
    
Example:

    node example/example.js --pagination infinite_scrolling --url 'https://www.burrp.com/delhi/phase-v-restaurants/nearby-offers' --filename data2.json --type housing
    

*2) Scraping page wise*

    node example/example.js --pagination 'page_wise' --url '<some_url>' --filename 'file_name' --type 'scraper_type' --pagecount 'no_of_pages_to scrap'
    
Example:
    
    // For Booking.com
    // let dataList = document.querySelectorAll('div.sr_property_block[data-hotelid]');
    // dataJson.name = hotelelement.querySelector('span.sr-hotel__name').innerText;
    // dataJson.reviews = hotelelement.querySelector('span.review-score-widget__subtext').innerText;
    // dataJson.rating = hotelelement.querySelector('span.review-score-badge').innerText

    node example/example.js --pagination page_wise --url 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1FCAEoggJCAlhYSDNYBGhsiAEBmAExuAEHyAEM2AEB6AEB-AECkgIBeagCAw&sid=caa43958feeb7988ce08164373a68dbb&class_interval=1&dest_id=866&dest_type=region&dtdisc=0&from_sf=1&group_adults=2&group_children=0&inac=0&index_postcard=0&label_click=undef&lsf=class%7C4%7C639&nflt=class=5;class=4;class=3;&no_rooms=1&order=class&postcard=0&raw_dest_type=region&region=866&room1=A,A&sb_price_type=total&ss_all=0&ssb=empty&sshis=0&rows=15&offset=0' --filename data3.json --type housing --pagecount 2


# Documentation
 To check out docs visit [https://jayesh96.github.io/jsPuppeteerScraper/](https://jayesh96.github.io/jsPuppeteerScraper/ "Documentation")


# Note
Different Website uses different query selectors, so we need to change based on that for proper web scraping.


# DEMO

https://drive.google.com/file/d/1uSu8UbWi4qGGIcxRRpHe2GneAto_y4Uj/view

