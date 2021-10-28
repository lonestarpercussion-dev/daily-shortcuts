var input = prompt('Item row number (starting from 1)');
if (input) {
	var list = document.querySelector('#searchEntries > ul');
	var children = Array.from(list.children);
	var item = children[parseInt(input) - 1];
	console.log(item);
	var mpn = item.getElementsByClassName('productMpn')[0];
	console.log(mpn);
	mpn = mpn.innerHTML;
	var searchString = 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=inventory%3A' + mpn;
	window.open(searchString);
}