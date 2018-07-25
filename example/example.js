const argv = require('minimist')(process.argv.slice(2));
const main = require('../src/index');


var tryScraper = () => {
    let scraperObject = new main();
    console.log(argv);
    pagination_type = argv['pagination'] || "-1";
    filename = argv['filename'] || "data.json";
    url = argv['url'] || "-1";
    type = argv['type'] || "-1";
    maxPagesToScrap = argv['pagecount'] || 1;
    if(pagination_type == -1 || url == -1|| type == -1){
        console.log("Arguments Not Passed Completely")
    }else if(pagination_type == 'infinite_scrolling'){
        // console.log("Passed")
        scraperObject.runInfiniteScrollPagination(url,filename);
    }else if(pagination_type == 'page_wise'){    
        scraperObject.runPageWisePagination(url,filename,maxPagesToScrap);
    }else{
        console.log("Some Error/No Match Found");
    }
}


tryScraper();

