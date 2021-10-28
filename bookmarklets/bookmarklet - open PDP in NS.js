var mpnElem = document.querySelector('body > div.page-generic.span12.container > div > div:nth-child(1) > div > div.details.isAuthorized > span');
var mpn = mpnElem.innerText;
var searchString = 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=inve%3A' + mpn;
window.open(searchString);