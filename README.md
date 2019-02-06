# TNTVillage-API

[![Build Status](https://travis-ci.org/drebrez/TNTVillage-API.svg?branch=master)](https://travis-ci.org/drebrez/TNTVillage-API)
[![Coverage Status](https://coveralls.io/repos/github/drebrez/TNTVillage-API/badge.svg?branch=master)](https://coveralls.io/github/drebrez/TNTVillage-API?branch=master)
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

const tntvillageAPI = new TNTVillageAPI();
```

## Example usage

### Simple search
```js
tntvillageAPI.search('GoldenEye')
    .then(res => console.log(res))
    .catch(err => console.err(err));
```

### Advanced search
```js
tntvillageAPI.search({
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
  "response_time": 661,
  "page": 1,
  "total_results": 5,
  "total_pages": 1,
  "results": [{
    "title": "Agente 007, GoldenEye - GoldenEye",
    "year": 1995,
    "quality": "720p",
    "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=474972",
    "torrent_link": "magnet:?xt=urn:btih:2279793814F18375A1D84510F4FD124A55B41C57&dn=Agente+007%2C+GoldenEye+-+GoldenEye+%281995%29&tr=http://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://IPv6.leechers-paradise.org:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.mg64.net:2710/announce&tr=udp://tracker.openbittorrent.com:80/announce",
    "seeders": 5,
    "leechers": 1
  }, {
    "title": "007 - GoldenEye ",
    "year": 1995,
    "quality": "1080p",
    "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=419888",
    "torrent_link": "magnet:?xt=urn:btih:EDB515B756355E608A093CCFCD4983F09EEF8D3A&dn=007+-+GoldenEye++%281995%29&tr=http://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://IPv6.leechers-paradise.org:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.mg64.net:2710/announce&tr=udp://tracker.openbittorrent.com:80/announce",
    "seeders": 2,
    "leechers": 3
  }, {
    "title": "007 - GoldenEye",
    "year": 1995,
    "quality": "1080p",
    "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=419887",
    "torrent_link": "magnet:?xt=urn:btih:C75D273BD8C39B74EC3C7F42075F3BA16A2AF1D8&dn=007+-+GoldenEye+%281995%29&tr=http://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://IPv6.leechers-paradise.org:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.mg64.net:2710/announce&tr=udp://tracker.openbittorrent.com:80/announce",
    "seeders": 7,
    "leechers": 1
  }, {
    "title": "007 - Goldeneye",
    "year": 1995,
    "quality": "",
    "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=312391",
    "torrent_link": "magnet:?xt=urn:btih:299C25A9FE2A943A117A972AF231D77E40676ABD&dn=007+-+Goldeneye+%281995%29&tr=http://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://IPv6.leechers-paradise.org:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.mg64.net:2710/announce&tr=udp://tracker.openbittorrent.com:80/announce",
    "seeders": 3,
    "leechers": 0
  }, {
    "title": "007 Goldeneye",
    "year": 1995,
    "quality": "",
    "link": "http://forum.tntvillage.scambioetico.org/index.php?showtopic=104971",
    "torrent_link": "magnet:?xt=urn:btih:137293AD7D12108E9FC91CA55EF33D3CD15F0178&dn=007+Goldeneye+%281995%29&tr=http://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.tntvillage.scambioetico.org:2710/announce&tr=udp://tracker.coppersurfer.tk:6969/announce&tr=udp://tracker.leechers-paradise.org:6969/announce&tr=udp://IPv6.leechers-paradise.org:6969/announce&tr=udp://tracker.internetwarriors.net:1337/announce&tr=udp://tracker.tiny-vps.com:6969/announce&tr=udp://tracker.mg64.net:2710/announce&tr=udp://tracker.openbittorrent.com:80/announce",
    "seeders": 1,
    "leechers": 1
  }]
}
```

## Parameters

These are the parameters available for the advanced search:

 - category
 - search
 - page

These are the categories available:

 - all_categories        
 - movies                
 - music                 
 - tv_movies_and_programs
 - documentaries         
 - students_releases     
 - e_books               
 - linux                 
 - anime                 
 - cartoons              
 - macintosh             
 - windows_software      
 - pc_game               
 - playstation           
 - music_video           
 - sport                 
 - theater               
 - wrestling             
 - various               
 - xbox                  
 - wallpaper_images      
 - other_games           
 - tv_series             
 - comics                
 - trash                 
 - nintendo              
 - a_book                
 - podcast               
 - newsstand             
 - mobile  

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