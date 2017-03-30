'use strict';

const chai = require('chai');
chai.use(require('chai-string'));
const should = chai.should();

const TNTVillageAPI = require('../tntvillage-api');

describe('TNTVillageAPI', () => {

  let tntvillage = new TNTVillageAPI(true);

  it('Test wrong params', done => {
    try {
      tntvillage.search(100);
      done('Should not get here');
    } catch (ex) {
      ex.should.be.a('Error');
      ex.message.should.be.equal('search needs an object or string as a parameter!');
      done();
    }
  });

  it('Test wrong category', done => {
    try {
      tntvillage.search({
        category: 'wrong'
      });
      done('Should not get here');
    } catch (ex) {
      ex.should.be.a('Error');
      ex.message.should.be.equal("'wrong' is not a valid value for category");
      done();
    }
  });

  it('Test simple search', done => {

    tntvillage.search('GoldenEye').then(res => {
      //console.log('   -> response: ' + JSON.stringify(res));

      res.should.be.json;

      res.response_time.should.be.above(10);
      res.page.should.be.equal(1);
      res.total_results.should.be.below(10);
      res.total_pages.should.be.equal(1);

      res.total_results.should.be.equal(res.results.length);

      done();
    }).catch(err => done(err));
  });

  for (let page = 1; page <= 10; page++) {

    it(`Test advanced search: retrieve page ${page} of movies`, done => {

      tntvillage.search({
        category: 'movies',
        search: '',
        page: page
      }).then(res => {
        //console.log('   -> response: ' + JSON.stringify(res));

        res.should.be.json;

        res.response_time.should.be.above(10);
        res.page.should.be.equal(page);
        res.total_results.should.be.above(25000);
        res.total_pages.should.be.above(1200);

        res.results.should.be.instanceof(Array);
        res.results.should.have.length.at.least(20);
        res.results.forEach(function (element) {
          element.title.should.not.be.empty;
          element.torrent_link.should.startsWith('magnet:?xt=');
        }, this);

        done();
      }).catch(err => done(err));
    });
  }

});