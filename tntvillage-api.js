'use strict';

const request = require('request');

const defaultOptions = {
  'baseUrl': 'http://www.tntvillage.scambioetico.org/?releaselist',
  'timeout': 3 * 1000
};

module.exports = class TNTVillageAPI {

  constructor({ options = defaultOptions, debug = false } = {}) {
    this._request = request.defaults(options);
    this._debug = debug;
  }

}