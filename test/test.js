var expect = require('chai').expect;
const main = require('../src/index');
var assert = require('assert');

function log (message) {
  console.log(message);
};
    

describe('main()', function() {
  describe('will save a json file ',function() {
    it('should save without error', function(done) {
      let scraperObject = new main();
      let url = 'https://www.booking.com/searchresults.html?aid=304142&label=gen173nr-1FCAEoggJCAlhYSDNYBGhsiAEBmAExuAEHyAEM2AEB6AEB-AECkgIBeagCAw&sid=caa43958feeb7988ce08164373a68dbb&class_interval=1&dest_id=866&dest_type=region&dtdisc=0&from_sf=1&group_adults=2&group_children=0&inac=0&index_postcard=0&label_click=undef&lsf=class%7C4%7C639&nflt=class=5;class=4;class=3;&no_rooms=1&order=class&postcard=0&raw_dest_type=region&region=866&room1=A,A&sb_price_type=total&ss_all=0&ssb=empty&sshis=0&rows=15&offset=0'
      let filename = './test/testdata.json';

      scraperObject.runPageWisePagination(url,filename,1, function(result){
        expect(result.status).to.equal(1);
      })
      done();
      
      });
    });
  });



