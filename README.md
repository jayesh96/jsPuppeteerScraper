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
*1) Scraping page wise*

    node main.js --pagination 'page_wise' --url '<some_url>' --filename 'file_name' --type 'scraper_type' --pagecount 'no_of_pages_to scrap'
    
Example:
    
    node main.js --pagination page_wise --url 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1FCAEoggJCAlhYSDNYBGhsiAEBmAExuAEHyAEM2AEB6AEB-AECkgIBeagCAw&sid=caa43958feeb7988ce08164373a68dbb&class=4&class=4&class_interval=1&dest_id=866&dest_type=region&from_sf=1&group_adults=2&group_children=0&label_click=undef&lsf=class%7C4%7C639&nflt=class%3D5%3B&no_rooms=1&order=class&raw_dest_type=region&region=866&room1=A%2CA&sb_price_type=total&ssb=empty&rows=15&offset=45' --filename data3.json --type housing --pagecount 10


*2 ) Scraper for infinite scrolling*

    node main.js --pagination 'infinte_scrolling' --url '<some_url>' --filename 'file_name' --type 'scraper_type' c
    
Example:

    node main.js --pagination infinite_scrolling --url 'https://housing.com/in/buy/search?f=eyJiYXNlIjpbeyJ0eXBlIjoiUE9MWSIsInV1aWQiOiIxY2E5OWMzM2UzZDhiOTg3Y2NmMSIsImxhYmVsIjoiTXVtYmFpIn1dLCJub25CYXNlQ291bnQiOjMsInR5cGUiOiJyZXNhbGUiLCJhcGFydG1lbnQiOlsxXSwibWluX3ByaWNlIjozMTUwMDAwMCwidiI6MiwicyI6ImQifQ%3D%3D' --filename data2.json --type housing



# DEMO

https://drive.google.com/file/d/1uSu8UbWi4qGGIcxRRpHe2GneAto_y4Uj/view

