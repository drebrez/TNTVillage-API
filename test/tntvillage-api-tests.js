'use strict';

const chai = require('chai');
const should = chai.should();

const TNTVillageAPI = require('../tntvillage-api');

describe('TNTVillageAPI', () => {

    let tntvillage = new TNTVillageAPI(true);

    for (let page = 1; page <= 10; page++) {

        it(`Test retrieve page ${page} of movies`, done => {

            tntvillage.search({
                category: 'movies',
                search: '',
                page: page
            }).then(res => {
                console.log('   -> response: ' + JSON.stringify(res));

                res.should.be.json;

                res.response_time.should.be.above(10);
                res.page.should.be.equal(page);
                res.total_results.should.be.above(25000);
                res.total_pages.should.be.above(1200);

                done();
            }).catch(err => done(err));
        });
    }

});