const argv = require('minimist')(process.argv.slice(2));
const main = require('../src/index');


var tryScraper = () => {
    let scraperObject = new main();
    console.log(argv);
    paginationType = argv['pagination'] || '-1';
    filename = argv['filename'] || 'data.json';
    url = argv['url'] || '-1';
    type = argv['type'] || '-1';
    maxPagesToScrap = argv['pagecount'] || 1;
    if(paginationType == -1 || url == -1|| type == -1){
        console.log('Arguments Not Passed Completely')
    }else if(paginationType == 'infinite_scrolling'){
        scraperObject.runInfiniteScrollPagination(url,filename,function(){
            
        })
    }else if(paginationType == 'page_wise'){    
        scraperObject.runPageWisePagination(url,filename,maxPagesToScrap,function(){
            
        });
    }else{
        console.log('Some Error/No Match Found');
    }
}


tryScraper();

