let rows;
try {
	let tbody = document.querySelector('#sitecategory_splits > tbody');
	rows = Array.prototype.slice.call(tbody.getElementsByTagName('tr'));
} catch {
	console.log('Failed to find site category rows.');
	window.alert('Category copy failed. See console.');
}

let textElements;
try {
	textElements = rows.map((tableRow) => {
		let tds = tableRow.getElementsByTagName('td');
		let categoryNameTd = tds[1];
		let preferredTd = tds[2];
		let categoryName = categoryNameTd.textContent.trim();
		let preferredTag = preferredTd.textContent.trim() === 'Yes' ? '[[P]]' : '';
		return categoryName + preferredTag;
	}).filter((text) => {
		return text.includes(' : ') && !text.includes('Categories') && !text.includes('Gift Ideas ') && !text.includes('Schools');
	});
	textElements.sort((categoryOne, categoryTwo) => categoryOne.includes('[[P]]') ? -1 : 1);
	textElements = textElements.map((categoryName) => {
		return categoryName.replace('[[P]]', '');
	});
} catch {
	console.log('Failed to get category names.');
	window.alert('Category copy failed. See console.');
}

let copyString = textElements.join('	');
navigator.clipboard.writeText(copyString).then(() => {
	console.log('Async: Copying to clipboard was successful: ' + copyString);
}, (err) => {
	console.error('Async: Could not copy text: ', err);
	window.alert('Category copy failed. See console.');
});