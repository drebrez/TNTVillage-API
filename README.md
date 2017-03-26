# TNTVillage-API

[![Build Status](https://travis-ci.org/drebrez/TNTVillage-API.svg?branch=master)](https://travis-ci.org/drebrez/TNTVillage-API)
[![Dependency Status](https://david-dm.org/drebrez/TNTVillage-API.svg)](https://david-dm.org/drebrez/TNTVillage-API)
[![devDependency Status](https://david-dm.org/drebrez/TNTVillage-API/dev-status.svg)](https://david-dm.org/drebrez/TNTVillage-API?type=dev)

A TNTVillage API wrapper for NodeJS.

## Usage

### Setup
```
npm install --save tntvillage-api
```

### Initialize
```js
const TNTVillageAPI = require("../tntvillage-api");

// Options are the request default options.
const TNTVillageAPI = new TNTVillageAPI();
```

## Example usage

### Simple search
```js
TNTVillageAPI.search('GoldenEye')
    .then(res => console.log(res))
    .catch(err => console.err(err));
```

### Advanced search
```js
TNTVillageAPI.search({
    category: 'movies',
    search: '',
    page: 2
}).then(res => console.log(res))
    .catch(err => console.err(err));
```

## Response

Example of a response
```js
{
   "response_time": 2153,
   "page": 1,
   "total_results": 5,
   "total_pages": 1,
   "results": [
      {
         "title": "Agente 007, GoldenEye - GoldenEye",
         "year": 1995,
         "quality": "720p",
         "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=474972",
         "torrent_link": "magnet:?xt=urn:btih:2279793814F18375A1D84510F4FD124A55B41C57&dn=Agente%2B007%252C%2BGoldenEye%2B-%2BGoldenEye%2B%25281995%2529&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2FIPv6.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
         "seeders": 11,
         "leechers": 1
      },
      {
         "title": "007 - GoldenEye ",
         "year": 1995,
         "quality": "1080p",
         "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=419888",
         "torrent_link": "magnet:?xt=urn:btih:EDB515B756355E608A093CCFCD4983F09EEF8D3A&dn=007%2B-%2BGoldenEye%2B%2B%25281995%2529&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2FIPv6.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
         "seeders": 3,
         "leechers": 6
      },
      {
         "title": "007 - GoldenEye",
         "year": 1995,
         "quality": "1080p",
         "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=419887",
         "torrent_link": "magnet:?xt=urn:btih:C75D273BD8C39B74EC3C7F42075F3BA16A2AF1D8&dn=007%2B-%2BGoldenEye%2B%25281995%2529&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2FIPv6.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
         "seeders": 5,
         "leechers": 4
      },
      {
         "title": "007 - Goldeneye",
         "year": 1995,
         "quality": "",
         "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=312391",
         "torrent_link": "magnet:?xt=urn:btih:299C25A9FE2A943A117A972AF231D77E40676ABD&dn=007%2B-%2BGoldeneye%2B%25281995%2529&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2FIPv6.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
         "seeders": 4,
         "leechers": 0
      },
      {
         "title": "007 Goldeneye",
         "year": 1995,
         "quality": "",
         "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=104971",
         "torrent_link": "magnet:?xt=urn:btih:137293AD7D12108E9FC91CA55EF33D3CD15F0178&dn=007%2BGoldeneye%2B%25281995%2529&tr=http%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.tntvillage.scambioetico.org%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2FIPv6.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2Ftracker.tiny-vps.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.mg64.net%3A2710%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
         "seeders": 1,
         "leechers": 1
      }
   ]
}
```

## Parameters

These are the parameters available for the advanced search:

 - category
 - search
 - page

These are the categories available:

 - movies
 - cartoons
 - documentaries
 - music
 - sport
 - acting
 - wrestling

# License
```
MIT License

Copyright (c) 2017 drebrez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```