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

const searchWebsite = (selfTarget = false) => {
    let query = document.getElementById('website-query').value;
    if (selfTarget) {
        window.open('https://www.lonestarpercussion.com/#/~search/page/1/view/listView/keywords/' + encodeURIComponent(query), '_self');
    } else {
        window.open('https://www.lonestarpercussion.com/#/~search/page/1/view/listView/keywords/' + encodeURIComponent(query));
    }
}

const googSearch = (selfTarget = false) => {
    let query = document.getElementById('goog-query').value.toLowerCase();
    if (selfTarget) {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query), '_self');
    } else {
        window.open('https://www.google.com/search?q=' + encodeURIComponent(query));
    }
}

const goToRecordById = (selfTarget = false) => {
    let recordType = document.getElementById('record-type-id').value;
    let recordId = document.getElementById('internal-id').value;
    let edit = document.getElementById('record-edit-radio').checked ? '&e=T' : '';
    if (selfTarget) {
        window.open(recordUrlsByRecordType[recordType] + recordId + edit, '_self');
    } else {
        window.open(recordUrlsByRecordType[recordType] + recordId + edit);
    }
}

const searchRecord = (selfTarget = false) => {
    let recordType = document.getElementById('record-type-search').value;
    let searchQuery = document.getElementById('search-query').value;
    if (selfTarget) {
        window.open(searchUrlsByRecordType[recordType] + encodeURIComponent(searchQuery), '_self');
    } else {
        window.open(searchUrlsByRecordType[recordType] + encodeURIComponent(searchQuery));
    }
}

const processEntrance = () => {
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('fromSheet') && urlParams.get('fromSheet') === 'true') {
        let loc = urlParams.get('loc');
        let query = urlParams.get('q');
        if (!['g', 'w', 'n', 'r'].includes(loc)) {
            return null;
        }
        switch (loc) {
            case "g":
                document.getElementById('goog-query').value = query;
                googSearch(true);
                break;
            case "w":
                document.getElementById('website-query').value = query;
                searchWebsite(true);
                break;
            case "n":
                document.getElementById('search-query').value = query;
                searchRecord(true);
                break;
            case "r":
                document.getElementById('internal-id').value = query;
                goToRecordById(true);
                break;
            default:
                break;
        }
    }
}

adjustFieldWidth();
addEnterEventListeners();
populateRecordTypes();
processEntrance();
