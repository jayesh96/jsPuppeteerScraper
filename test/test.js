var expect = require('chai').expect;
const index = require('../src/index')
var assert = require('assert')

describe('index()', function () {
    it('should give a success response and save data to testdata.json', function() { 
        let scraperObject = new index();
        var result = scraperObject.runInfiniteScrollPagination('https://www.burrp.com/delhi/phase-v-restaurants/nearby-offers','./test/testdata.json',function(done,err){
        if(err){
            done(err);
        }    
        expect(answer).to.equal("42");
        done();
        })
        
    });
});

