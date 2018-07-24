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

    node main.js --pagination 'infinte_scrolling' --url '<some_url>' --filename 'file_name' --type 'scraper_type' c
    
Example:

    node main.js --pagination infinite_scrolling --url 'https://www.burrp.com/mumbai/north-indian-collection' --filename data2.json--type housing
    

*2) Scraping page wise*

    node main.js --pagination 'page_wise' --url '<some_url>' --filename 'file_name' --type 'scraper_type' --pagecount 'no_of_pages_to scrap'
    
Example:
    
    node main.js --pagination page_wise --url 'https://www.burrp.com/mumbai/north-indian-collection' --filename data3.json --type housing --pagecount 10


# Note
Different Website uses differentt query selectory, so we need to change based on that for proper web scraping.

# DEMO

https://drive.google.com/file/d/1uSu8UbWi4qGGIcxRRpHe2GneAto_y4Uj/view

