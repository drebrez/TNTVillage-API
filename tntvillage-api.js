'use strict';

const got = require('got');
const cheerio = require('cheerio');

module.exports = class TNTVillageAPI {

  constructor({ debug = false } = {}) {

    this._baseUrl = 'http://www.tntvillage.scambioetico.org/src/releaselist.php';

    this._timeout = 3 * 1000;

    this._debug = debug;

    this._category = {
      movies: 4,
      cartoons: 8
    };

  }

  _get(query = {}) {
    if (this._debug) console.info(`Making request to: '${this._baseUrl}', query: ${JSON.stringify(query)}`);

    return got(this._baseUrl, {
      method: 'POST',
      body: query,
      timeout: this._timeout
    }).then(({ body }) => body);
  }

  _formatPage(res, date) {
    let $ = cheerio.load(res);

    let results = $('#form_go_to_page > span > b:nth-child(1)').text();
    let page = $('#form_go_to_page > span > b:nth-child(2)').text();
    let pages = $('#form_go_to_page > span > b:nth-child(3)').text();

    const result = {
      response_time: parseInt(date, 10),
      page: parseInt(page, 10),
      total_results: parseInt(results, 10),
      total_pages: parseInt(pages, 10),
      results: []
    };

    return result;
  }

  _getData({ category, search, page = 1 }, date) {

    if (category && !this._category[category]) {
      throw new Error(`'${category}' is not a valid value for category`);
    } else {
      category = this._category[category];
    }

    return this._get({
      cat: category,
      srcrel: search,
      page
    }).then(res => this._formatPage(res, Date.now() - date));
  }

  search(params) {
    const date = Date.now();

    return this._getData(params, date);
  }

}