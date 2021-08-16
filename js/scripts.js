const recordUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/item/item.nl?id=',
    'Site Category': 'https://665798.app.netsuite.com/app/site/setup/prescategory.nl?id=',
    'Commerce Category': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Promotion': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Custom Record Type': 'https://665798.app.netsuite.com/app/common/custom/custrecord.nl?id=',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/searchresults.nl?searchid=',
    'Sales Order': 'https://665798.app.netsuite.com/app/accounting/transactions/salesord.nl?id=',
    'Quote': 'https://665798.app.netsuite.com/app/accounting/transactions/estimate.nl?id=',
}

const searchUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=inventory%3A',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=search%3A',
    'Sales Order': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=sales%3A',
    'Quote': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=quote%3A',
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

const goToRecordById = () => {
    let recordType = document.getElementById('record-type-id').value;
    let recordId = document.getElementById('internal-id').value;
    window.open(recordUrlsByRecordType[recordType] + recordId);
}

const searchRecord = () => {
    let recordType = document.getElementById('record-type-search').value;
    let searchQuery = document.getElementById('search-query').value;
    window.open(searchUrlsByRecordType[recordType] + searchQuery);
}

populateRecordTypes();