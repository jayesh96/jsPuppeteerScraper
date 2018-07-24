// USAGE 
// 1) Scraper with pagination page wise
// node main.js --pagination 'page_wise' --url '<some_url>' --filename 'file_name' --type 'scraper_type' --pagecount 'no_of_pages_to scrap'
// ----------------------------------------------------------------------------------------------------------------------------------------

//2 ) Scraper with pagination infinite scrolling
// node main.js --pagination 'infinte_scrolling' --url '<some_url>' --filename 'file_name' --type 'scraper_type' 


const argv = require('minimist')(process.argv.slice(2));
const Index = require('.././index')


let scraperObject = new Index();
console.log(argv)
pagination_type = argv['pagination'] || "-1"
filename = argv['filename'] || "data.json"
url = argv['url'] || "-1"
type = argv['type'] || "-1"
maxPagesToScrap = argv['pagecount'] || 1;
console.log(pagination_type)

if(pagination_type == -1 || url == -1|| type == -1){
    console.log("Arguments Not Passed Completely")
}else if(pagination_type == 'infinite_scrolling'){
    // console.log("Passed")
    scraperObject.runInfiniteScrollPagination(url,filename)
}else if(pagination_type == 'page_wise'){
    
    scraperObject.runPageWisePagination(scraperObject,url,filename,maxPagesToScrap)
}else{
    console.log("Some Error/No Match Found")
}



