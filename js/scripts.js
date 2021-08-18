const recordUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/item/item.nl?id=',
    'Site Category': 'https://665798.app.netsuite.com/app/site/setup/prescategory.nl?id=',
    'Commerce Category': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Promotion': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/searchresults.nl?searchid=',
    'Sales Order': 'https://665798.app.netsuite.com/app/accounting/transactions/salesord.nl?id=',
    'Quote': 'https://665798.app.netsuite.com/app/accounting/transactions/estimate.nl?id=',
    'Tooltip': 'https://665798.app.netsuite.com/app/common/custom/custrecordentry.nl?rectype=134&id=',
    'Custom Record Type': 'https://665798.app.netsuite.com/app/common/custom/custrecord.nl?id=',
}

const searchUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=inventory%3A',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=search%3A',
    'Sales Order': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=sales%3A',
    'Quote': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=quote%3A',
    'Tooltip': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=definition%3A',
}

const alnum = 'abcdefghijklmnopqrstuvwxyz1234567890';

const adjustFieldWidth = () => {
    for (let section of document.getElementsByTagName('section')) {
        let inputFields = Array.from(section.getElementsByTagName('fieldset'));
        if (inputFields.length % 2 !== 0) {
            inputFields[inputFields.length - 1].style.width = '100%';
        }
    }
}

const addEnterEventListeners = () => {
    let allElements = Array.from(document.getElementsByTagName('body')[0].getElementsByTagName('*'));
    for (let childIndex=0; childIndex<allElements.length-1; childIndex++) {
        let elem = allElements[childIndex];
        if (elem.tagName === 'INPUT') {
            let buttonForEnterKeystroke;
            for (let followingChildIndex=childIndex+1; followingChildIndex<allElements.length; followingChildIndex++) {
                let followingElem = allElements[followingChildIndex];
                if (followingElem.tagName === 'BUTTON') {
                    buttonForEnterKeystroke = followingElem;
                    break;
                }
            }
            if (buttonForEnterKeystroke) {
                elem.addEventListener('keyup', (event) => {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                        buttonForEnterKeystroke.click();
                    }
                });
            }
        }
    }
}

const populateRecordTypes = () => {
    let select = document.getElementById('record-type-id');
    let option;
    for (let recordType in recordUrlsByRecordType) {
        option = document.createElement('option');
        option.value = recordType;
        option.innerText = recordType;
        select.appendChild(option);
    }

    select = document.getElementById('record-type-search');
    for (let recordType in searchUrlsByRecordType) {
        option = document.createElement('option');
        option.value = recordType;
        option.innerText = recordType;
        select.appendChild(option);
    }
}

const searchWebsite = () => {
    let query = document.getElementById('website-query').value;
    window.open('https://www.lonestarpercussion.com/#/~search/page/1/view/listView/keywords/' + query);
}

const googSearch = () => {
    let query = document.getElementById('goog-query').value.toLowerCase();
    let stringArray = [];
    for (let letter of query) {
        if (!alnum.includes(letter)) {
            stringArray.push('+');
        } else {
            stringArray.push(letter);
        }
    }
    query = stringArray.join('');
    window.open('https://www.google.com/search?q=' + query);
}

const goToRecordById = () => {
    let recordType = document.getElementById('record-type-id').value;
    let recordId = document.getElementById('internal-id').value;
    let edit = document.getElementById('record-edit').value === 'Yes' ? 'T' : 'F';
    window.open(recordUrlsByRecordType[recordType] + recordId + '&e=' + edit);
}

const searchRecord = () => {
    let recordType = document.getElementById('record-type-search').value;
    let searchQuery = document.getElementById('search-query').value;
    window.open(searchUrlsByRecordType[recordType] + searchQuery);
}

adjustFieldWidth();
addEnterEventListeners();
populateRecordTypes();