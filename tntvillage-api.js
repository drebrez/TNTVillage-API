'use strict';

const got = require('got');
const cheerio = require('cheerio');

module.exports = class TNTVillageAPI {

  constructor(debug = false) {

    this._baseUrl = 'http://www.tntvillage.scambioetico.org/src/releaselist.php';

    this._timeout = 3 * 1000;

    this._debug = debug;

    this._category = {
      movies: 4,
      cartoons: 8,
      documentaries: 14,
      music: 21,
      sport: 22,
      acting: 23,
      wrestling: 24
    };

  }

  _get(query = {}) {
    if (this._debug) console.info(`DEBUG: Making request to: '${this._baseUrl}', query: ${JSON.stringify(query)}`);

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

    $('.showrelease_tb > table tr:not(:first-child)').each((index, row) => {

      let title = $('td:nth-child(7) > a', row).text().replace(/\s\(\d{4}\)/g, '');

      let yearMatches = $('td:nth-child(7) > a', row).text().match(/\((\d{4})\)/);
      let year = (yearMatches && yearMatches.length > 0 ? yearMatches[1] : -1);

      let quality = '';
      let qualityString = $('td:nth-child(7)', row).clone().children().remove().end().text();
      if (qualityString.match(/480p/i)) quality = '480p';
      if (qualityString.match(/720p/i)) quality = '720p';
      if (qualityString.match(/1080p/i)) quality = '1080p';

      let link = $('td:nth-child(7) > a', row).attr('href');
      let torrent_link = $('td:nth-child(2) > a', row).attr('href');
      let seeders = $('td:nth-child(5)', row).text();
      let leechers = $('td:nth-child(4)', row).text();

      result.results.push({
        title: title,
        year: parseInt(year, 10),
        quality: quality,
        link: link,
        torrent_link: torrent_link,
        seeders: parseInt(seeders, 10),
        leechers: parseInt(leechers, 10),
      });
    });

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

    if (typeof (params) === 'string') {
      return this._getData({
        category: 'movies',
        search: params
      }, date);
    } else if (typeof (params) === 'object') {
      return this._getData(params, date);
    }

    throw new Error('search needs an object or string as a parameter!');
  }

}