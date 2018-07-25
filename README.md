# Documentation for js-puppetter-scraper

**js-puppetter-scraper** is a **nodejs package** based on puppeteer library.The main dependency for the project is **puppetter**.
Install puppetter using :
		
		npm i puppetter

The Structure of project is: 
			
			Scraper
			├── README.md
			├── example
			|  └── example.js //a basic command line utility 
			├── out.txt
			├── package-lock.json
			├── package.json
			├── src
			|  ├── index.js	//entry point for project
			|  └── scraper.js
			└── test
			   └── test.js

	directory: 211 file: 8 
	

The project consist of two files:
1) Index.js
2) scraper.js

## Index.js

index.js is the entry point of project which consist of two functions initiated inside main class

		class  main{

			constructor(){

			this.runInfiniteScrollPagination  =  async (url,filename)={
				...
				};

			this.runPageWisePagination  =  async (url,filename,maxPagesToScrap) => {
				...
				};	
			}
		}
		
		module.exports = main;
The input required for runInfiniteScrollPagination() is **url** and **filename**
The input required for runPageWisePagination() is **url** ,**filename** and **maxPagesToScrap**

# scraper.js

	class  scraper{

			constructor(){

				this.scrapeData  =  async (url,filename)={
				...
				};

				this.WebListscraper  =  async (url,filename,maxPagesToScrap) => {
				...
				};	
				this.scrapeInfiniteScrollItems  =  async (url,filename,maxPagesToScrap) => {
				...
				};	
			}
		}
		module.exports = scraper;

This module is used for scraping and extracting data and comprises of three different functions

## Output

The output of project will be `<filename>.json` file stored in root project.


## Running  Test Files

Unit Test has been done using **Mocha+Chai** . The test script can be called using

					npm test
					
The test output will be saved as **testdata.json**

## Check out few examples 

***1 ) Scraper for infinite scrolling***

	node example/example.js --pagination 'infinte_scrolling' --url '<some_url>' --filename 'file_name' --type 'scraper_type' c

Example:

	node example/example.js --pagination infinite_scrolling --url 'https://www.burrp.com/delhi/phase-v-restaurants/nearby-offers' --filename data2.json --type housing

***2) Scraping page wise***

	node example/example.js --pagination 'page_wise' --url '<some_url>' --filename 'file_name' --type 'scraper_type' --pagecount 'no_of_pages_to scrap'

Example:

	node example/example.js --pagination page_wise --url 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1FCAEoggJCAlhYSDNYBGhsiAEBmAExuAEHyAEM2AEB6AEB-AECkgIBeagCAw&sid=caa43958feeb7988ce08164373a68dbb&class_interval=1&dest_id=866&dest_type=region&dtdisc=0&from_sf=1&group_adults=2&group_children=0&inac=0&index_postcard=0&label_click=undef&lsf=class%7C4%7C639&nflt=class=5;class=4;class=3;&no_rooms=1&order=class&postcard=0&raw_dest_type=region&region=866&room1=A,A&sb_price_type=total&ss_all=0&ssb=empty&sshis=0&rows=15&offset=0' --filename data3.json --type housing --pagecount 2