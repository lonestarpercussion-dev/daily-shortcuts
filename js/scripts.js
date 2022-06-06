const recordUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/item/item.nl?id=',
    'Site Category': 'https://665798.app.netsuite.com/app/site/setup/prescategory.nl?id=',
    'Commerce Category': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Promotion': 'https://665798.app.netsuite.com/app/site/cms/services/commercecategory.nl?id=',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/searchresults.nl?searchid=',
    'Sales Order': 'https://665798.app.netsuite.com/app/accounting/transactions/salesord.nl?id=',
    'Purchase Order': 'https://665798.app.netsuite.com/app/accounting/transactions/purchord.nl?id=',
    'Quote': 'https://665798.app.netsuite.com/app/accounting/transactions/estimate.nl?id=',
    'Tooltip': 'https://665798.app.netsuite.com/app/common/custom/custrecordentry.nl?rectype=134&id=',
    'Custom Record Type': 'https://665798.app.netsuite.com/app/common/custom/custrecord.nl?id=',
    'Item Field (Numeric IDs Only)': 'https://665798.app.netsuite.com/app/common/custom/itemcustfield.nl?id=',
    'Transaction Body Field (Numeric IDs Only)': 'https://665798.app.netsuite.com/app/common/custom/bodycustfield.nl?id=',
    'Transaction Line Field (Numeric IDs Only)': 'https://665798.app.netsuite.com/app/common/custom/columncustfield.nl?id=',
}

const searchUrlsByRecordType = {
    'Inventory Item': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=inventory%3A',
    'Saved Search': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=search%3A',
    'Sales Order': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=sales%3A',
    'Purchase Order': 'https://665798.app.netsuite.com/app/common/search/ubersearchresults.nl?quicksearch=T&searchtype=Uber&frame=be&Uber_NAMEtype=KEYWORDSTARTSWITH&Uber_NAME=purchase%3A',
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

const informationItemData = [
    {
        "Internal ID": 2,
        "Name": "About Us",
        "URL Component": "Old-About-Lone-Star-Percussion"
    },
    {
        "Internal ID": 273,
        "Name": "Amplify - Amplify 2019",
        "URL Component": "Amplify-2019"
    },
    {
        "Internal ID": 285,
        "Name": "Amplify - Amplify 2019 Staff Page",
        "URL Component": "Amplify-2019-Staff-Page"
    },
    {
        "Internal ID": 277,
        "Name": "Amplify - Amplify 2019 Travel Blog",
        "URL Component": "Amplify-2019-Dallas-Travel-Guide"
    },
    {
        "Internal ID": 289,
        "Name": "Amplify - Amplify 2019 Wrap-Up",
        "URL Component": "Amplify-2019-Wrap-Up"
    },
    {
        "Internal ID": 314,
        "Name": "Amplify - Amplify 2020",
        "URL Component": "Amplify-2020"
    },
    {
        "Internal ID": 178,
        "Name": "Amplify - Amplify Event I",
        "URL Component": "Amplify-Seminar-I"
    },
    {
        "Internal ID": 183,
        "Name": "Amplify - Amplify Event I Wrap-Up",
        "URL Component": "Amplify-I-Wrap-Up"
    },
    {
        "Internal ID": 187,
        "Name": "Amplify - Amplify Event II",
        "URL Component": "Amplify-II"
    },
    {
        "Internal ID": 193,
        "Name": "Amplify - Amplify Event II Wrap-Up",
        "URL Component": "Amplify-II-Wrap-Up"
    },
    {
        "Internal ID": 242,
        "Name": "Amplify - Amplify Event III SoCal",
        "URL Component": "Amplify-III-SoCal"
    },
    {
        "Internal ID": 257,
        "Name": "Amplify - Amplify Event IV Summer 2019",
        "URL Component": "Amplify-IV"
    },
    {
        "Internal ID": 210,
        "Name": "Amplify - Amplify Event PASIC 2018",
        "URL Component": "Amplify-PASIC-2018"
    },
    {
        "Internal ID": 297,
        "Name": "Amplify - Amplify PASIC 2019",
        "URL Component": "Amplify-PASIC-2019"
    },
    {
        "Internal ID": 262,
        "Name": "Amplify - PA Packages",
        "URL Component": "Amplify-PA-Packages"
    },
    {
        "Internal ID": 189,
        "Name": "Article - (Product Spotlight) DW Texas/California Drums",
        "URL Component": "DW-Texas-California-Drums"
    },
    {
        "Internal ID": 258,
        "Name": "Article - 30 New Yearâ€™s Resolution Ideas For the Eager 2019 Percussionist",
        "URL Component": "30-New-Years-Resolution-Ideas-For-the-Eager-2019-Percussionist"
    },
    {
        "Internal ID": 270,
        "Name": "Article - 6 Bad Reasons to be a Section Leader (And 4 Good Ones)",
        "URL Component": "6-Bad-Reasons-to-be-a-Section-Leader-And-4-Good-Ones"
    },
    {
        "Internal ID": 30,
        "Name": "Article - April Fools 2011 - Innovative Percussion Sight Reading Mallets",
        "URL Component": "IP-4111AF"
    },
    {
        "Internal ID": 40,
        "Name": "Article - April Fools 2012 - Adams AutoPedalScan AF4112",
        "URL Component": "Adams-AF4112"
    },
    {
        "Internal ID": 58,
        "Name": "Article - April Fools 2014",
        "URL Component": "April-Fools-2014"
    },
    {
        "Internal ID": 59,
        "Name": "Article - April Fools 2014 - Yamaha Gravtech Marching Drum",
        "URL Component": "Yamaha-GravTech"
    },
    {
        "Internal ID": 84,
        "Name": "Article - April Fools 2015 - System Blue/Offworld FlamScribe Notation Pad",
        "URL Component": "System-Blue-Offworld-FlamScribe-Notation-Practice-Pad"
    },
    {
        "Internal ID": 111,
        "Name": "Article - April Fools 2016 - Tama Insta-Tune Snare Drum",
        "URL Component": "Tama-Insta-Tune-Snare-Drum"
    },
    {
        "Internal ID": 342,
        "Name": "Article - April Fools 2021",
        "URL Component": "Innovative-Percussion-Drummer-Fuel-Energy-Drink"
    },
    {
        "Internal ID": 180,
        "Name": "Article - Audio Article I - Scare Tactics",
        "URL Component": "know-what-you-dont-know"
    },
    {
        "Internal ID": 79,
        "Name": "Article - Band Director's Guide to Buying Timpani Heads",
        "URL Component": "Band-Directors-Guide-to-Buying-Timpani-Heads-1"
    },
    {
        "Internal ID": 192,
        "Name": "Article - Bearing Edges",
        "URL Component": "Bearing-Edges"
    },
    {
        "Internal ID": 116,
        "Name": "Article - Choose Marimba Mallets For Your Front Ensemble",
        "URL Component": "Choose-Front-Ensemble-Marimba-Mallets"
    },
    {
        "Internal ID": 117,
        "Name": "Article - Choose Vibraphone Mallets For Your Front Ensemble",
        "URL Component": "Choose-Front-Ensemble-Vibraphone-Mallets"
    },
    {
        "Internal ID": 153,
        "Name": "Article - Choosing Replacement Heads for Your Congas and Bongos",
        "URL Component": "Choosing-Replacement-Heads-for-Your-Congas-and-Bongos"
    },
    {
        "Internal ID": 139,
        "Name": "Article - Common Marching Band Field Audio Problems",
        "URL Component": "Common-Marching-Band-Field-Audio-Problems"
    },
    {
        "Internal ID": 68,
        "Name": "Article - DCI Analysis - 2014",
        "URL Component": "Who-Will-Win-Drums-At-DCI-Finals-Predicting-with-Statistics"
    },
    {
        "Internal ID": 69,
        "Name": "Article - DCI Analysis - Article 2 - 2014",
        "URL Component": "A-hard-look-at-the-data-Easy-judges-vs-Hard-judges"
    },
    {
        "Internal ID": 70,
        "Name": "Article - DCI Analysis - Article 3 - 2014",
        "URL Component": "Drum-Corps-Strongest-Historical-Locations"
    },
    {
        "Internal ID": 315,
        "Name": "Article - Drum Set Buying Guide",
        "URL Component": "Drum-Set-Buying-Guide"
    },
    {
        "Internal ID": 291,
        "Name": "Article - Drumline Maintenance Pt. 1 - Tenors",
        "URL Component": "Drumline-Maintenance-Pt-1-Tenors"
    },
    {
        "Internal ID": 292,
        "Name": "Article - Drumline Maintenance Pt. 2 - Snare Drums",
        "URL Component": "Drumline-Maintenance-Pt.-2-Snare-Drums"
    },
    {
        "Internal ID": 294,
        "Name": "Article - Drumline Maintenance Pt. 3 - Bass Drums",
        "URL Component": "Drumline-Maintenance-Pt.-3-Bass-Drums"
    },
    {
        "Internal ID": 159,
        "Name": "Article - Drumline Survival Guide",
        "URL Component": "Drumline-Survival-Guide"
    },
    {
        "Internal ID": 26,
        "Name": "Article - Finding the Right Replacement Timpani Heads",
        "URL Component": "Replacing-Timpani-Heads"
    },
    {
        "Internal ID": 82,
        "Name": "Article - First Impressions from NAMM 2015",
        "URL Component": "First-Impressions-from-NAMM-2015"
    },
    {
        "Internal ID": 120,
        "Name": "Article - Getting That Vintage Sound From Your Drums",
        "URL Component": "Getting-That-Vintage-Sound-From-Your-Drums"
    },
    {
        "Internal ID": 147,
        "Name": "Article - How To Be Prepared For A Backline Gig",
        "URL Component": "How-To-Be-Prepared-For-A-Backline-Gig"
    },
    {
        "Internal ID": 190,
        "Name": "Article - How to Change Your Drum Heads & Get Them in Tune",
        "URL Component": "How-to-Change-Your-Drum-Heads"
    },
    {
        "Internal ID": 275,
        "Name": "Article - How to Find Your Perfect Practice Pad",
        "URL Component": "How-to-Find-Your-Perfect-Practice-Pad"
    },
    {
        "Internal ID": 123,
        "Name": "Article - How To Make A Good First Impression With Your Drumline",
        "URL Component": "How-To-Make-A-Good-First-Impression-With-Your-Drumline"
    },
    {
        "Internal ID": 287,
        "Name": "Article - How to Make the Best Cymbal Stack for Your Sound",
        "URL Component": "How-to-Make-the-Best-Cymbal-Stack-for-Your-Sound"
    },
    {
        "Internal ID": 200,
        "Name": "Article - How to Manage Marching Band, School, and a Social Life",
        "URL Component": "How-to-Manage-Marching-Band-School-and-Your-Social-Life"
    },
    {
        "Internal ID": 199,
        "Name": "Article - How to Tape Your Sticks",
        "URL Component": "How-to-Tape-Your-Marching-Drum-Sticks"
    },
    {
        "Internal ID": 157,
        "Name": "Article - Latin Drum Head Replacement Reference Chart",
        "URL Component": "Latin-Drum-Head-Replacement-Reference-Chart"
    },
    {
        "Internal ID": 195,
        "Name": "Article - Little Things a Drummer Needs & Forgets at the Gig",
        "URL Component": "Little-Things-a-Drummer-Needs"
    },
    {
        "Internal ID": 106,
        "Name": "Article - NAMM 2016 Write Up",
        "URL Component": "NAMM-2016-News"
    },
    {
        "Internal ID": 140,
        "Name": "Article - NAMM 2017 Write Up",
        "URL Component": "News-From-NAMM-2017"
    },
    {
        "Internal ID": 172,
        "Name": "Article - NAMM 2018 Write-Up",
        "URL Component": "NAMM-2018"
    },
    {
        "Internal ID": 173,
        "Name": "Article - NAMM 2018 Write-Up Page 2",
        "URL Component": "NAMM-2018-P2"
    },
    {
        "Internal ID": 261,
        "Name": "Article - NAMM 2019",
        "URL Component": "NAMM-2019-Recap"
    },
    {
        "Internal ID": 312,
        "Name": "Article - NAMM 2020 Write-Up",
        "URL Component": "NAMM-2020"
    },
    {
        "Internal ID": 76,
        "Name": "Article - New PASIC 2014 Items",
        "URL Component": "The-New-PASIC-Hotness"
    },
    {
        "Internal ID": 100,
        "Name": "Article - PASIC 2015 Write Up",
        "URL Component": "PASIC-2015-Write-Up"
    },
    {
        "Internal ID": 125,
        "Name": "Article - PASIC 2016 Write Up",
        "URL Component": "PASIC-2016-Write-Up"
    },
    {
        "Internal ID": 162,
        "Name": "Article - PASIC 2017 Write-Up",
        "URL Component": "PASIC-2017-Write-Up"
    },
    {
        "Internal ID": 243,
        "Name": "Article - PASIC 2018 Write Up",
        "URL Component": "PASIC-2018-Write-Up"
    },
    {
        "Internal ID": 300,
        "Name": "Article - PASIC 2019 Write-Up",
        "URL Component": "Everything-New-on-the-Expo-Floor-at-PASIC-2019"
    },
    {
        "Internal ID": 349,
        "Name": "Article - PASIC 2021 Writeup",
        "URL Component": "pasics-back-heres-whats-new-2021"
    },
    {
        "Internal ID": 241,
        "Name": "Article - Post-Season Sound System Storage: Four Steps to Success",
        "URL Component": "Post-Season-Sound-System-Storage-Four-Steps-to-Success"
    },
    {
        "Internal ID": 56,
        "Name": "Article - Remo Crimplock Symmetry Conga Chart",
        "URL Component": "Remo-Crimplock-Symmetry-Conga-Chart"
    },
    {
        "Internal ID": 83,
        "Name": "Article - Rosewood vs. Synthetic vs. Padauk Bars",
        "URL Component": "Rosewood-vs-Synthetic-vs-Padauk-Marimba-Bars"
    },
    {
        "Internal ID": 103,
        "Name": "Article - Star Wars Practice Pads",
        "URL Component": "Star-Wars-Practice-Pads"
    },
    {
        "Internal ID": 198,
        "Name": "Article - Tapers",
        "URL Component": "Tapers"
    },
    {
        "Internal ID": 196,
        "Name": "Article - Tension Rods, Lugs, Lug Casings",
        "URL Component": "Solving-the-Lug-Confusion"
    },
    {
        "Internal ID": 293,
        "Name": "Article - The Reasons Why You Should Learn Your Scales on Timpani",
        "URL Component": "The-Reasons-Why-You-Should-Learn-Your-Scales-on-Timpani"
    },
    {
        "Internal ID": 88,
        "Name": "Article - Top 10 \"Late Show with David Letterman\" Drumming Moments",
        "URL Component": "Top-10-David-Letterman-Drumming-Moments"
    },
    {
        "Internal ID": 197,
        "Name": "Article - Translation - Choosing Replacement Heads for Your Congas and Bongos",
        "URL Component": "Choosing-Replacement-Heads-for-Your-Congas-Translation"
    },
    {
        "Internal ID": 353,
        "Name": "Article - Triangle Beater Guide",
        "URL Component": "Triangle-Beater-Guide"
    },
    {
        "Internal ID": 202,
        "Name": "Article - What Good is Band Anyway?",
        "URL Component": "What-Good-is-Band-Anyway"
    },
    {
        "Internal ID": 64,
        "Name": "Article - What is PASIC?",
        "URL Component": "What-is-PASIC"
    },
    {
        "Internal ID": 295,
        "Name": "Article - What Kind of Drum Key Do I Need?",
        "URL Component": "What-Kind-of-Drum-Key-Do-I-Need"
    },
    {
        "Internal ID": 299,
        "Name": "Article - What to Expect From a DCI Audition, feat. Paul Rennick",
        "URL Component": "What-to-Expect-From-a-DCI-Audition-feat.-Paul-Rennick"
    },
    {
        "Internal ID": 357,
        "Name": "Article - Why Are There So Many 4-Mallet Grips?",
        "URL Component": "Why-Are-There-So-Many-4-Mallet-Grips"
    },
    {
        "Internal ID": 80,
        "Name": "Band Director's Guide to Buying Timpani Heads (2)",
        "URL Component": "Band-Directors-Guide-to-Buying-Timpani-Heads-2"
    },
    {
        "Internal ID": 280,
        "Name": "Clickbait Joke - Can You Win Drums In DCI By Just Playing Paradiddles?",
        "URL Component": "Can-You-Win-Drums-In-DCI-By-Just-Playing-Paradiddles"
    },
    {
        "Internal ID": 283,
        "Name": "Clickbait Joke - Could The Couchmen Ever Be A Real Drum Corps?",
        "URL Component": "Could-The-Couchmen-Ever-Be-A-Real-Drum-Corps"
    },
    {
        "Internal ID": 279,
        "Name": "Clickbait Joke - Five UNBELIEVABLE Facts About The Marimba",
        "URL Component": "Five-UNBELIEVABLE-Facts-About-The-Marimba-Number-4-Will-Shock-You"
    },
    {
        "Internal ID": 284,
        "Name": "Clickbait Joke - This Is The Most UNDERRATED Type Of Drum",
        "URL Component": "This-Is-The-Most-UNDERRATED-Type-Of-Drum"
    },
    {
        "Internal ID": 281,
        "Name": "Clickbait Joke - This One-Man Front Ensemble STUNS Audiences With His Emotional",
        "URL Component": "One-Man-Front-Ensemble-Stuns-Audiences-With-His-Emotional-Performance"
    },
    {
        "Internal ID": 282,
        "Name": "Clickbait Joke - Three Steps To Becoming The Next Paul Rennick (Step 3 Is IMPOSS",
        "URL Component": "Three-Steps-To-Becoming-The-Next-Paul-Rennick"
    },
    {
        "Internal ID": 4,
        "Name": "Contact Us",
        "URL Component": "Contact-Us"
    },
    {
        "Internal ID": 208,
        "Name": "Content Hub - Articles",
        "URL Component": "Content-Hub-Articles"
    },
    {
        "Internal ID": 207,
        "Name": "Content Hub - Guides",
        "URL Component": "Content-Hub-Guides"
    },
    {
        "Internal ID": 204,
        "Name": "Content Hub - Home",
        "URL Component": "Content-Hub-Home"
    },
    {
        "Internal ID": 205,
        "Name": "Content Hub - Product Spotlights",
        "URL Component": "Content-Hub-Product-Spotlights"
    },
    {
        "Internal ID": 201,
        "Name": "Content Hub - Sticks & Mallets",
        "URL Component": "Content-Hub-Sticks-Mallets"
    },
    {
        "Internal ID": 89,
        "Name": "Content Hub - Video Hub",
        "URL Component": "Video-Hub"
    },
    {
        "Internal ID": 206,
        "Name": "Content Hub - Videos",
        "URL Component": "Content-Hub-Videos"
    },
    {
        "Internal ID": 37,
        "Name": "Email Sign-UP",
        "URL Component": "email-signup"
    },
    {
        "Internal ID": 41,
        "Name": "Free AAX X-Plosion Crash with the purchase of AAX Aero Crash",
        "URL Component": "Free-AAX-X-Plosion-Crash-with-the-purchase-of-AAX-Aero-Crash"
    },
    {
        "Internal ID": 13,
        "Name": "Free Lone Star T-Shirt on Online Orders over $100.00",
        "URL Component": "Free-Tshirt-with-100-Order-Online"
    },
    {
        "Internal ID": 72,
        "Name": "Infographic",
        "URL Component": "Infographic"
    },
    {
        "Internal ID": 356,
        "Name": "Landing Page - Best of Percussion Bracket 2022",
        "URL Component": "Best-of-Percussion-Bracket-2022"
    },
    {
        "Internal ID": 184,
        "Name": "Landing Page - Bill Bachman Camp 2018",
        "URL Component": "Bill-Bachman-Class-2018"
    },
    {
        "Internal ID": 278,
        "Name": "Landing Page - Bill Bachman Camp 2019",
        "URL Component": "Bill-Bachman-Class-2019"
    },
    {
        "Internal ID": 42,
        "Name": "Landing Page - Bill Bachman Snare & Quad Camp",
        "URL Component": "Bill-Bachman-Snare-Quad-Camp"
    },
    {
        "Internal ID": 151,
        "Name": "Landing Page - Bill BachmanÂ Master Class",
        "URL Component": "Bill-Bachman-Master-Class-2017"
    },
    {
        "Internal ID": 182,
        "Name": "Landing Page - Buy Evans Pad, Get Promark Sticks",
        "URL Component": "Buy-Evans-Pad-Get-Promark-Sticks"
    },
    {
        "Internal ID": 142,
        "Name": "Landing Page - California Grand Opening",
        "URL Component": "California-Grand-Opening"
    },
    {
        "Internal ID": 87,
        "Name": "Landing Page - Casey Cangelosi/Pius Cheung Clinic",
        "URL Component": "Casey-Cangelosi-Pius-Cheung-Clinic"
    },
    {
        "Internal ID": 354,
        "Name": "Landing Page - Dragonfly Product Spotlight",
        "URL Component": "Dragonfly-Percussion-Spotlight"
    },
    {
        "Internal ID": 358,
        "Name": "Landing Page - Dream Cymbal Tasting 2022",
        "URL Component": "Dream-Cymbal-Tasting-2022"
    },
    {
        "Internal ID": 186,
        "Name": "Landing Page - DW Days 2018",
        "URL Component": "DW-Days-2018"
    },
    {
        "Internal ID": 355,
        "Name": "Landing Page - Dynasty Elite Series E-Frame",
        "URL Component": "Dynasty-Elite-Series-E-Frame"
    },
    {
        "Internal ID": 54,
        "Name": "Landing Page - Ignacio Berroa Trio Clinic 3/5/14",
        "URL Component": "Ignacio-Berroa-Trio-Clinic-3-5-14"
    },
    {
        "Internal ID": 311,
        "Name": "Landing Page - Instagram Bio",
        "URL Component": "IG-Bio"
    },
    {
        "Internal ID": 124,
        "Name": "Landing Page - Jason Bittner Lessons & Masterclass 12/1/16",
        "URL Component": "Jason-Bittner-Lessons-Masterclass-12-1-16"
    },
    {
        "Internal ID": 67,
        "Name": "Landing Page - Jeff Queen/Bill Bachman Camp",
        "URL Component": "Jeff-Queen-Bill-Bachman-Camp"
    },
    {
        "Internal ID": 94,
        "Name": "Landing Page - Jim Riley Masterclass",
        "URL Component": "Jim-Riley-Masterclass"
    },
    {
        "Internal ID": 60,
        "Name": "Landing Page - Lessons with Jeff Queen and Jason Sutter",
        "URL Component": "Lessons-with-Jeff-Queen-and-Jason-Sutter"
    },
    {
        "Internal ID": 21,
        "Name": "Landing Page - Lessons with Rascal Flatts Drummer and Band Leader Jim Riley",
        "URL Component": "Jim-Riley-Lessons"
    },
    {
        "Internal ID": 156,
        "Name": "Landing Page - Mapex/Majestic Day of Percussion",
        "URL Component": "Mapex-Majestic-Day-of-Percussion"
    },
    {
        "Internal ID": 194,
        "Name": "Landing Page - Marimba Rentals (Spanish)",
        "URL Component": "Marimba-Rentals-Spanish"
    },
    {
        "Internal ID": 324,
        "Name": "Landing Page - Marimba Rentals 2020 Highlight",
        "URL Component": "Marimba-Rentals-2020-Highlight"
    },
    {
        "Internal ID": 127,
        "Name": "Landing Page - Meinl Day 2016",
        "URL Component": "Meinl-Day-2016"
    },
    {
        "Internal ID": 75,
        "Name": "Landing Page - Meinl Hands-On Day 2014",
        "URL Component": "Meinl-Hands-On-Day-2014"
    },
    {
        "Internal ID": 250,
        "Name": "Landing Page - One-Day Cymbal Sale 2018",
        "URL Component": "One-Day-Cymbal-Sale-2018"
    },
    {
        "Internal ID": 260,
        "Name": "Landing Page - Pageantry/Titan TMEA 2019",
        "URL Component": "Pageantry-Titan-TMEA-2019"
    },
    {
        "Internal ID": 44,
        "Name": "Landing Page - Part-Time Web Developer",
        "URL Component": "Seeking-a-part-time-future-CTO-with-programming-experience"
    },
    {
        "Internal ID": 327,
        "Name": "Landing Page - PASIC 2020 Promotion",
        "URL Component": "PASIC-2020"
    },
    {
        "Internal ID": 337,
        "Name": "Landing Page - PASIC 2020 Virtual DW Booth",
        "URL Component": "Pasic-2020-DW-PDP-LP-Gretsch"
    },
    {
        "Internal ID": 191,
        "Name": "Landing Page - Rich Redmond Clinic",
        "URL Component": "Rich-Redmond-Clinic"
    },
    {
        "Internal ID": 263,
        "Name": "Landing Page - Rich Redmond Clinic CA 2019",
        "URL Component": "Rich-Redmond-Clinic-CA"
    },
    {
        "Internal ID": 115,
        "Name": "Landing Page - Rich Redmond Lessons 5/21",
        "URL Component": "Rich-Redmond-Lessons-5-21"
    },
    {
        "Internal ID": 19,
        "Name": "Landing Page - Rich Redmond's C.R.A.S.H Course for Success",
        "URL Component": "Rich-Redmonds-C-R-A-S-H-Course-for-Success-at-Lone-Star-Percussion"
    },
    {
        "Internal ID": 99,
        "Name": "Landing Page - Sabian Day 2015",
        "URL Component": "Sabian-Day-2015"
    },
    {
        "Internal ID": 150,
        "Name": "Landing Page - Sabian Meet The Masters Events 2017",
        "URL Component": "Meet-The-Masters-2017"
    },
    {
        "Internal ID": 306,
        "Name": "Landing Page - Secret Santa Drum Configurator",
        "URL Component": "Secret-Santa-Drum-Configurator"
    },
    {
        "Internal ID": 104,
        "Name": "Landing Page - Sheet Music Refinements",
        "URL Component": "Sheet-Music-Refinements"
    },
    {
        "Internal ID": 343,
        "Name": "Landing Page - Showroom Reopening Sale",
        "URL Component": "Showroom-Reopening-Sale"
    },
    {
        "Internal ID": 326,
        "Name": "Landing Page - Sweet Relief 2020",
        "URL Component": "Sweet-Relief-2020"
    },
    {
        "Internal ID": 16,
        "Name": "Landing Page - Take a lesson with Jazz Legend Ignacio Berroa",
        "URL Component": "Ignacio-Berroa-Lessons"
    },
    {
        "Internal ID": 309,
        "Name": "Landing Page - The 12 Days of Drum Deals 2019",
        "URL Component": "12-Days-of-Drum-Deals-2019"
    },
    {
        "Internal ID": 269,
        "Name": "Landing Page - Todd Sucherman Master Class DTX",
        "URL Component": "Todd-Sucherman-Master-Class-DTX"
    },
    {
        "Internal ID": 255,
        "Name": "Landing Page - Todd Sucherman Master Classes",
        "URL Component": "Todd-Sucherman-Master-Classes"
    },
    {
        "Internal ID": 274,
        "Name": "Landing Page - Warehouse & Community Blowout 2019",
        "URL Component": "Mega-Sale-2019"
    },
    {
        "Internal ID": 179,
        "Name": "Landing Page - Warehouse Sale 2018",
        "URL Component": "Warehouse-Sale-2018"
    },
    {
        "Internal ID": 320,
        "Name": "Landing Page - Warehouse Sale 2020",
        "URL Component": "Warehouse-Sale-2020"
    },
    {
        "Internal ID": 144,
        "Name": "Landing Page - Why California?",
        "URL Component": "Why-California"
    },
    {
        "Internal ID": 109,
        "Name": "Landing Page - Zildjian Day 2016",
        "URL Component": "Zildjian-Day-2016"
    },
    {
        "Internal ID": 65,
        "Name": "Landing Page - Zildjian Rebate 2014",
        "URL Component": "Zildjian-Rebate-2014"
    },
    {
        "Internal ID": 8,
        "Name": "Lone Star News",
        "URL Component": "Lone-Star-News"
    },
    {
        "Internal ID": 34,
        "Name": "Lone Star Percussion Updated Return Policy",
        "URL Component": "Lone-Star-Percussion-Updated-Return-Policy"
    },
    {
        "Internal ID": 340,
        "Name": "Promo - 10% Off Zildjian/VF President's Day 2021",
        "URL Component": "10-Off-Zildjian-VF-February-2021"
    },
    {
        "Internal ID": 318,
        "Name": "Promo - 2\" Tape Downbeat Deal",
        "URL Component": "2-Tape-Downbeat-Deal"
    },
    {
        "Internal ID": 138,
        "Name": "Promo - 20% Off All In-Stock Drum Heads",
        "URL Component": "20-Off-All-In-Stock-Drum-Heads"
    },
    {
        "Internal ID": 135,
        "Name": "Promo - 20% Off All Vic Firth Sticks",
        "URL Component": "20-Off-All-Vic-Firth-Sticks"
    },
    {
        "Internal ID": 252,
        "Name": "Promo - 20% Off All Vic Firth Sticks 2018",
        "URL Component": "Promo-20-Off-All-Vic-Firth-Sticks-2018"
    },
    {
        "Internal ID": 307,
        "Name": "Promo - 20% Off All Vic Firth Sticks 2019",
        "URL Component": "20-Off-All-Vic-Firth-Sticks-2019"
    },
    {
        "Internal ID": 310,
        "Name": "Promo - 20% Off In-Stock Drum Heads 2019",
        "URL Component": "Drum-Head-Sale-2019"
    },
    {
        "Internal ID": 347,
        "Name": "Promo - 3/4 Sleeve Blowout Sale 2021",
        "URL Component": "three-quarters-sleeve-sale"
    },
    {
        "Internal ID": 163,
        "Name": "Promo - Black Friday 2017 VicPack Promo",
        "URL Component": "Black-Friday-2017-VicPack-Promo"
    },
    {
        "Internal ID": 244,
        "Name": "Promo - Black Friday 2018 VicPack Promo",
        "URL Component": "Black-Friday-2018-VicPack-Promo"
    },
    {
        "Internal ID": 302,
        "Name": "Promo - Black Friday 2019 VicPack Promo",
        "URL Component": "VicPack-Black-Friday-Deal-2019"
    },
    {
        "Internal ID": 301,
        "Name": "Promo - Black Friday 2019 VicPack Promo Early Bird",
        "URL Component": "VicPack-Black-Friday-2019"
    },
    {
        "Internal ID": 53,
        "Name": "Promo - Black Friday Sale",
        "URL Component": "Black-Friday-Sale"
    },
    {
        "Internal ID": 149,
        "Name": "Promo - Black Swamp 10% Off Drums + Free Gear",
        "URL Component": "Black-Swamp-10-Off-Drums-Free-Gear"
    },
    {
        "Internal ID": 98,
        "Name": "Promo - Black Swamp Free ArcPlate Promo",
        "URL Component": "Black-Swamp-Free-ArcPlate-Promo"
    },
    {
        "Internal ID": 121,
        "Name": "Promo - Black Swamp Free Triangle Clip Promo",
        "URL Component": "Black-Swamp-Free-Triangle-Clip-Promo"
    },
    {
        "Internal ID": 240,
        "Name": "Promo - Buy 3 Get 1 Evans Heads 2018",
        "URL Component": "Buy-3-Get-1-Evans-Heads-2018"
    },
    {
        "Internal ID": 319,
        "Name": "Promo - Buy 3 Get 1 Promark Sticks",
        "URL Component": "Buy-3-Get-1-Promark-Sticks"
    },
    {
        "Internal ID": 323,
        "Name": "Promo - Buy 3 Pairs of Vic Firth Drum Set Sticks, Get 33% Off",
        "URL Component": "Buy-3-Vic-Firth-Sticks-Get-33-Off"
    },
    {
        "Internal ID": 348,
        "Name": "Promo - Buy 6 Pairs of Promark Sticks for the Price of 4",
        "URL Component": "6-pack-promark-2021"
    },
    {
        "Internal ID": 155,
        "Name": "Promo - Buy a RealFeel Get Free Promark Sticks",
        "URL Component": "Buy-RealFeel-Get-Free-Promark-Sticks"
    },
    {
        "Internal ID": 317,
        "Name": "Promo - Buy Evans Pad, Get Promark Sticks",
        "URL Component": "Buy-Evans-Get-Promark-Sticks"
    },
    {
        "Internal ID": 160,
        "Name": "Promo - Buy Promark FireGrain Get Free Bag",
        "URL Component": "Buy-Promark-FireGrain-Get-Free-Bag"
    },
    {
        "Internal ID": 339,
        "Name": "Promo - BYOS & Limited Edition Offworld + Free Mask",
        "URL Component": "BYOS-Limited-Edition-Offworld-Free-Mask"
    },
    {
        "Internal ID": 134,
        "Name": "Promo - Cyber Friday 2016: Sheet Music",
        "URL Component": "Cyber-Friday-2016-Sheet-Music"
    },
    {
        "Internal ID": 167,
        "Name": "Promo - Cyber Friday 2017: 20% Off Sheet Music",
        "URL Component": "Cyber-Friday-2017-20-Off-Sheet-Music"
    },
    {
        "Internal ID": 249,
        "Name": "Promo - Cyber Friday 2018: 20% Off Sheet Music",
        "URL Component": "Cyber-Friday-2018-20-Off-Sheet-Music"
    },
    {
        "Internal ID": 305,
        "Name": "Promo - Cyber Friday 2019: 20% Off Sheet Music",
        "URL Component": "Cyber-Friday-2019"
    },
    {
        "Internal ID": 164,
        "Name": "Promo - Cyber Monday 2017: 33% off IP Signature",
        "URL Component": "Cyber-Monday-2017-33-off-IP-Signature"
    },
    {
        "Internal ID": 245,
        "Name": "Promo - Cyber Monday 2018: 33% off IP Signature",
        "URL Component": "Cyber-Monday-2018-33-off-IP-Signature"
    },
    {
        "Internal ID": 303,
        "Name": "Promo - Cyber Monday 2019: 33% off IP Signature",
        "URL Component": "Cyber-Monday-2019"
    },
    {
        "Internal ID": 130,
        "Name": "Promo - Cyber Tuesday 2016: 30% Off All Shirts",
        "URL Component": "30-Off-All-Shirts-Cyber-Tuesday-2016"
    },
    {
        "Internal ID": 165,
        "Name": "Promo - Cyber Tuesday 2017: 30% Off Shirts",
        "URL Component": "Cyber-Tuesday-2017-30-Off-Shirts"
    },
    {
        "Internal ID": 133,
        "Name": "Promo - Cyber Wednesday 2016: Promark",
        "URL Component": "Cyber-Wednesday-2016-Promark"
    },
    {
        "Internal ID": 166,
        "Name": "Promo - Cyber Wednesday 2017: 20% 4 pairs Promark Sticks",
        "URL Component": "Cyber-Wednesday-2017-Promark-Sticks"
    },
    {
        "Internal ID": 247,
        "Name": "Promo - Cyber Wednesday 2018: 30% Off Shirts",
        "URL Component": "Cyber-Wednesday-2018-30-Off-Shirts"
    },
    {
        "Internal ID": 304,
        "Name": "Promo - Cyber Wednesday 2019: 30% Off Apparel",
        "URL Component": "Cyber-Wednesday-2019"
    },
    {
        "Internal ID": 330,
        "Name": "Promo - Cyber Wednesday 2020: 30% Off In-Stock Apparel",
        "URL Component": "Cyber-Wednesday-2020"
    },
    {
        "Internal ID": 351,
        "Name": "Promo - Cyber Wednesday 2021: 30% Off In-Stock Apparel",
        "URL Component": "30-Off-In-Stock-Apparel-2021"
    },
    {
        "Internal ID": 248,
        "Name": "Promo - Cyber Week Thursday 2018 D'Addario",
        "URL Component": "Cyber-Week-Thursday-2018-DAddario"
    },
    {
        "Internal ID": 246,
        "Name": "Promo - Cyber Week Tuesday 2018 Promark",
        "URL Component": "Cyber-Week-Tuesday-2018-Promark"
    },
    {
        "Internal ID": 97,
        "Name": "Promo - DCI Contest",
        "URL Component": "dci-contest"
    },
    {
        "Internal ID": 137,
        "Name": "Promo - Downbeat Deal: IP240 Mallets $19.95",
        "URL Component": "Downbeat-Deal-IP240-Mallets-19-95"
    },
    {
        "Internal ID": 126,
        "Name": "Promo - Evans 25% Off Sale",
        "URL Component": "Evans-25-Off-Sale"
    },
    {
        "Internal ID": 146,
        "Name": "Promo - Evans Calftone and UV1 Buy 3 Get 1 Free Sale",
        "URL Component": "Evans-UV1-and-Calftone-Buy-3-Get-1-Free-Sale"
    },
    {
        "Internal ID": 39,
        "Name": "Promo - Free Gift Card With Drum Set or Shell Pack Purchase",
        "URL Component": "free-gift-card"
    },
    {
        "Internal ID": 14,
        "Name": "Promo - Free Sabian Cymbal with Purchase",
        "URL Component": "Free-Sabian-Cymbal-with-Purchase"
    },
    {
        "Internal ID": 32,
        "Name": "Promo - Free Sabian Cymbal with Purchase of Qualifying Sabian Cymbal",
        "URL Component": "Sabian-Free-Cymbal"
    },
    {
        "Internal ID": 136,
        "Name": "Promo - Free Shipping + No Tax In-Stock Cajons",
        "URL Component": "Free-Shipping-No-Tax-In-Stock-Cajons"
    },
    {
        "Internal ID": 131,
        "Name": "Promo - Grover Pro 15% Off Tambourines",
        "URL Component": "Grover-Pro-15-Off-Tambourines"
    },
    {
        "Internal ID": 119,
        "Name": "Promo - Grover Pro Free Mount Promotion",
        "URL Component": "Grover-Pro-Free-Mount-Promotion"
    },
    {
        "Internal ID": 333,
        "Name": "Promo - Holiday 2020 - 20% Off In-Stock Drum Heads",
        "URL Component": "Drum-Head-Sale-2020"
    },
    {
        "Internal ID": 336,
        "Name": "Promo - Holiday 2020 - 25% Off DW, Gretsch, PDP & LP",
        "URL Component": "Promo-Holiday-2020-25-Off-DW-Gretsch-PDP-LP"
    },
    {
        "Internal ID": 338,
        "Name": "Promo - Holiday 2020 - 33% Off IP Signature Round 2",
        "URL Component": "33-Off-IP-Signature-2020-Round-2"
    },
    {
        "Internal ID": 328,
        "Name": "Promo - Holiday 2020 - Black Friday Early Bird Evans RF12D-RED",
        "URL Component": "Holiday-2020-Black-Friday-Early-Bird-Evans-RF12D-RED"
    },
    {
        "Internal ID": 334,
        "Name": "Promo - Holiday 2020 - Black Friday Zildjian Cymbals",
        "URL Component": "Black-Friday-2020"
    },
    {
        "Internal ID": 329,
        "Name": "Promo - Holiday 2020 - Cyber Monday 33% Off IP Signature",
        "URL Component": "Cyber-Monday-2020"
    },
    {
        "Internal ID": 331,
        "Name": "Promo - Holiday 2020 - Cyber Week 20% Off Sheet Music",
        "URL Component": "Cyber-Friday-2020"
    },
    {
        "Internal ID": 335,
        "Name": "Promo - Holiday 2020 - Downbeat Deal LSP SCB",
        "URL Component": "Downbeat-Deal-Lone-Star-SCB-2020"
    },
    {
        "Internal ID": 332,
        "Name": "Promo - Holiday 2020 - IP240 $19.95 Downbeat Deal",
        "URL Component": "IP240-Downbeat-Deal-2020"
    },
    {
        "Internal ID": 352,
        "Name": "Promo - Holiday 2021 - Cyber Week 20% Off In-Stock Sheet Music",
        "URL Component": "Holiday-Sale-2021-20-Off-In-Stock-Sheet-Music"
    },
    {
        "Internal ID": 350,
        "Name": "Promo - Holiday 2021 Cyber Monday Cymbals/IP240s",
        "URL Component": "Cyber-Monday-2021"
    },
    {
        "Internal ID": 11,
        "Name": "Promo - Holiday Cymbal Sale",
        "URL Component": "Holiday-Cymbal-Sale"
    },
    {
        "Internal ID": 171,
        "Name": "Promo - Holiday Sale 2017: 20% Off All In-Stock Heads",
        "URL Component": "Holiday-Sale-2017-20-Off-All-In-Stock-Heads"
    },
    {
        "Internal ID": 169,
        "Name": "Promo - Holiday Sale 2017: Free Shipping + No Tax In-Stock Cajons",
        "URL Component": "Holiday-Cajon-Sale-2017-Free-Shipping-No-Tax"
    },
    {
        "Internal ID": 170,
        "Name": "Promo - Holiday Sale 2017: IP240 $19.95 Downbeat Deal",
        "URL Component": "Holiday-Sale-2017-IP240-19.95-Downbeat-Deal"
    },
    {
        "Internal ID": 168,
        "Name": "Promo - Holiday Sale 2017: Vic Firth 20% Off",
        "URL Component": "Holiday-Sale-2017-Vic-Firth-20-Off"
    },
    {
        "Internal ID": 254,
        "Name": "Promo - Holiday Sale 2018: IP240 $19.95 Downbeat Deal",
        "URL Component": "Holiday-Sale-2018-IP240-19.95-Downbeat-Deal"
    },
    {
        "Internal ID": 308,
        "Name": "Promo - Holiday Sale 2019: IP240 $19.95 Downbeat Deal",
        "URL Component": "Holiday-Sale-2019-IP240-19.95-Downbeat-Deal"
    },
    {
        "Internal ID": 129,
        "Name": "Promo - IP 33% Off Signature Sticks & Mallets (Cyber Monday 2016)",
        "URL Component": "IP-33-Off-Signature-Sticks-Mallets-Cyber-Monday-2016"
    },
    {
        "Internal ID": 322,
        "Name": "Promo - IP Buy 2 Get 1 2020",
        "URL Component": "IP-Buy-2-Get-1-2020"
    },
    {
        "Internal ID": 52,
        "Name": "Promo - IP Free Bag Promo",
        "URL Component": "IP-Free-Bag-Promo"
    },
    {
        "Internal ID": 96,
        "Name": "Promo - IP Free Stick & Mallet Sale Summer 2015",
        "URL Component": "IP-Free-Stick-Mallet-Sale-Summer-2015"
    },
    {
        "Internal ID": 85,
        "Name": "Promo - Mapex MyDentity Free Tom Promo 2015",
        "URL Component": "Mapex-MyDentity-Free-Tom-Promo-2015"
    },
    {
        "Internal ID": 325,
        "Name": "Promo - North American Snare Drums",
        "URL Component": "Promo-North-American-Snare-Drums"
    },
    {
        "Internal ID": 148,
        "Name": "Promo - One Day Only: Dallas Warehouse Blow-Out Sale SaturdayMay 6!",
        "URL Component": "Warehouse-Sale-May"
    },
    {
        "Internal ID": 31,
        "Name": "Promo - One Day Only: Warehouse Blow-Out Sale Saturday April 30!",
        "URL Component": "Warehouse-Blow-Out-Sale-April-30th"
    },
    {
        "Internal ID": 251,
        "Name": "Promo - Planet Waves Breakout & Core Cable Promo",
        "URL Component": "Planet-Waves-Breakout-Core-Cable-Promo"
    },
    {
        "Internal ID": 256,
        "Name": "Promo - Post-Christmas 20% Drum Head Sale",
        "URL Component": "Post-Christmas-20-Drum-Head-Sale"
    },
    {
        "Internal ID": 346,
        "Name": "Promo - Promark SPYR Series",
        "URL Component": "Promark-SPYR-Series-Mallets"
    },
    {
        "Internal ID": 118,
        "Name": "Promo - Promark/Evans Free Bag Promos",
        "URL Component": "Promark-Evans-Free-Bag-Promos"
    },
    {
        "Internal ID": 132,
        "Name": "Promo - Roland TD-11K-S $799 Black Friday 2016",
        "URL Component": "Black-Friday-Roland-TD-11K-S"
    },
    {
        "Internal ID": 43,
        "Name": "Promo - Roland TD-4KP Free Pedal Juice Rebate",
        "URL Component": "Roland-TD-4KP-Free-Pedal-Juice-Rebate"
    },
    {
        "Internal ID": 253,
        "Name": "Promo - Sabian & Zildjian Instant Rebate Sale",
        "URL Component": "Cymbal-Instant-Rebate-Sale"
    },
    {
        "Internal ID": 176,
        "Name": "Promo - Sabian/Zildjian Rebate 2018",
        "URL Component": "Sabian-Zildjian-Rebate-2018"
    },
    {
        "Internal ID": 341,
        "Name": "Promo - Sabian/Zildjian Rebate 2021",
        "URL Component": "Sabian-Zildjian-Rebate-2021"
    },
    {
        "Internal ID": 154,
        "Name": "Promo - Sale of Thrones",
        "URL Component": "Sale-of-Thrones"
    },
    {
        "Internal ID": 101,
        "Name": "Promo - Vic Firth Free VicPack Promo",
        "URL Component": "Vic-Firth-Free-VicPack-Promo"
    },
    {
        "Internal ID": 128,
        "Name": "Promo - Vic Firth Matt Greiner Play-Along Contest 2016",
        "URL Component": "Vic-Firth-Matt-Greiner-Play-Along-Contest-2016"
    },
    {
        "Internal ID": 271,
        "Name": "Promo - WGI D'addario Sale",
        "URL Component": "WGI-Daddario-Sale"
    },
    {
        "Internal ID": 22,
        "Name": "Promo - Yamaha DTX900 Series Rebate",
        "URL Component": "Yamaha-DTX900-Series-Rebate"
    },
    {
        "Internal ID": 18,
        "Name": "Promo - Yamaha Tour Custom Drum Set Rebate",
        "URL Component": "Yamaha-Tour-Custom-Drum-Set-Rebate"
    },
    {
        "Internal ID": 12,
        "Name": "Promo - Zildjian & Sabian Cymbal Sale",
        "URL Component": "Zildjian-Sabian-Cymbal-Sale"
    },
    {
        "Internal ID": 296,
        "Name": "Promo - Zildjian Cymbal Rebate 2019",
        "URL Component": "Zildjian-Cymbal-Rebate-2019"
    },
    {
        "Internal ID": 9,
        "Name": "Request a Catalog",
        "URL Component": "Request-a-Catalog"
    },
    {
        "Internal ID": 29,
        "Name": "Set Up A Wish List",
        "URL Component": "Set-Up-A-Wish-List"
    },
    {
        "Internal ID": 55,
        "Name": "Site - Armory Snare Trade-In Program",
        "URL Component": "Armory-Snare-Trade-In-Program"
    },
    {
        "Internal ID": 141,
        "Name": "Site - Audio Configuration / PA Systems",
        "URL Component": "PA-Systems"
    },
    {
        "Internal ID": 35,
        "Name": "Site - Contact Us",
        "URL Component": "Contact-Us-Form.html"
    },
    {
        "Internal ID": 264,
        "Name": "Site - Contact Us Test",
        "URL Component": "Site-Contact-Us-Test"
    },
    {
        "Internal ID": 158,
        "Name": "Site - Drum Speak Ringtones",
        "URL Component": "Drum-Speak-Ringtones"
    },
    {
        "Internal ID": 316,
        "Name": "Site - Email Re-subscribe Confirmation",
        "URL Component": "Site-Email-Re-subscribe-Confirmation"
    },
    {
        "Internal ID": 46,
        "Name": "Site - FAQ",
        "URL Component": "FAQ"
    },
    {
        "Internal ID": 47,
        "Name": "Site - Financing",
        "URL Component": "Financing"
    },
    {
        "Internal ID": 3,
        "Name": "Site - International Shipping",
        "URL Component": "International-Shipping"
    },
    {
        "Internal ID": 66,
        "Name": "Site - Link to Lone Star Percussion",
        "URL Component": "Link-to-Lone-Star-Percussion"
    },
    {
        "Internal ID": 5,
        "Name": "Site - Lone Star Percussion Return Policy",
        "URL Component": "Lone-Star-Percussion-Return-Policy"
    },
    {
        "Internal ID": 6,
        "Name": "Site - Lone Star Percussion: Shipping",
        "URL Component": "Lone-Star-Percussion-Shipping"
    },
    {
        "Internal ID": 23,
        "Name": "Site - Marimba Rentals For Any Player and Any Budget",
        "URL Component": "Marimba-Rentals"
    },
    {
        "Internal ID": 27,
        "Name": "Site - My Wishlist",
        "URL Component": "My-Wishlist"
    },
    {
        "Internal ID": 48,
        "Name": "Site - Our Location",
        "URL Component": "Our-Location"
    },
    {
        "Internal ID": 110,
        "Name": "Site - Our People",
        "URL Component": "Our-People"
    },
    {
        "Internal ID": 143,
        "Name": "Site - Our Stores",
        "URL Component": "Our-Locations"
    },
    {
        "Internal ID": 49,
        "Name": "Site - Our Story",
        "URL Component": "About-Lone-Star-Percussion"
    },
    {
        "Internal ID": 174,
        "Name": "Site - PEP - PEP/OMNIS Landing Page",
        "URL Component": "OMNIS"
    },
    {
        "Internal ID": 161,
        "Name": "Site - PEP - Preferred Educator Program Signup",
        "URL Component": "Preferred-Educator-Program-Signup"
    },
    {
        "Internal ID": 1,
        "Name": "Site - Percussion/Drum Instrument Repair",
        "URL Component": "Drum-Repair"
    },
    {
        "Internal ID": 25,
        "Name": "Site - Privacy Policy",
        "URL Component": "Privacy-Policy"
    },
    {
        "Internal ID": 45,
        "Name": "Site - Private Drum Lessons",
        "URL Component": "Drum-Lessons"
    },
    {
        "Internal ID": 77,
        "Name": "Site - Redirect",
        "URL Component": "redirect"
    },
    {
        "Internal ID": 62,
        "Name": "Site - Review Redirector",
        "URL Component": "review"
    },
    {
        "Internal ID": 61,
        "Name": "Site - Scholarships",
        "URL Component": "Scholarships"
    },
    {
        "Internal ID": 74,
        "Name": "Site - School Bids",
        "URL Component": "School-Bids"
    },
    {
        "Internal ID": 33,
        "Name": "Site - School Bids - (Legacy Netsuite)",
        "URL Component": "School-Bids-Netsuite"
    },
    {
        "Internal ID": 28,
        "Name": "Site - Search Wishlist",
        "URL Component": "Search-Wishlist"
    },
    {
        "Internal ID": 50,
        "Name": "Site - Shipping",
        "URL Component": "Shipping"
    },
    {
        "Internal ID": 63,
        "Name": "Site - Sitemap",
        "URL Component": "Link-Sitemap"
    },
    {
        "Internal ID": 177,
        "Name": "Site - Slideshow Tester",
        "URL Component": "Slideshow-Tester"
    },
    {
        "Internal ID": 51,
        "Name": "Site - Thank You",
        "URL Component": "Thank-You"
    },
    {
        "Internal ID": 78,
        "Name": "Site - Track Order",
        "URL Component": "Track-Order"
    },
    {
        "Internal ID": 24,
        "Name": "Site - We want your used, broken, ugly cymbals!",
        "URL Component": "Two-Dollar-Cymbal-Trades"
    },
    {
        "Internal ID": 276,
        "Name": "Test - Amplify Agenda HTML & CSS",
        "URL Component": "Test-Amplify-Agenda-HTML-CSS"
    },
    {
        "Internal ID": 152,
        "Name": "Test - Article Hub ( OLD)",
        "URL Component": "Article-Hub"
    },
    {
        "Internal ID": 212,
        "Name": "Test - Article Page Template",
        "URL Component": "Test-Article-Page-Template"
    },
    {
        "Internal ID": 239,
        "Name": "Test - Article Template",
        "URL Component": "Test-Article-Template"
    },
    {
        "Internal ID": 209,
        "Name": "Test - CSS Hack for MailChimp Signup Form",
        "URL Component": "Test-CSS-Hack-for-MailChimp-Signup-Form"
    },
    {
        "Internal ID": 313,
        "Name": "Test - Descriptions Tester (Unindexed)",
        "URL Component": "Test-Descriptions-Tester-Unindexed"
    },
    {
        "Internal ID": 344,
        "Name": "Test - Education Access Request",
        "URL Component": "Education-Access-Request"
    },
    {
        "Internal ID": 345,
        "Name": "Test - Education Access Request (without iframe)",
        "URL Component": "Test-Education-Access-Request-without-iframe"
    },
    {
        "Internal ID": 122,
        "Name": "Test - Gravitar Test 2",
        "URL Component": "Gravitar-Test-2"
    },
    {
        "Internal ID": 286,
        "Name": "Test - Order Summary",
        "URL Component": "Test-Order-Summary"
    },
    {
        "Internal ID": 15,
        "Name": "Test - Poll",
        "URL Component": "Poll"
    },
    {
        "Internal ID": 145,
        "Name": "Test - School Bids (TEST)",
        "URL Component": "School-Bids-TEST"
    },
    {
        "Internal ID": 213,
        "Name": "Test - Share Buttons Hack",
        "URL Component": "Test-Share-Buttons-Hack"
    },
    {
        "Internal ID": 259,
        "Name": "TEST - Space Invaders",
        "URL Component": "TEST-Breakout-Canvas-Game"
    },
    {
        "Internal ID": 114,
        "Name": "Test - test",
        "URL Component": "test1"
    },
    {
        "Internal ID": 321,
        "Name": "Test - Test Page (Unindexed)",
        "URL Component": "Test-Tester-Unindexed"
    },
    {
        "Internal ID": 95,
        "Name": "Test - Trending Wall Test",
        "URL Component": "Trending-Wall-Test"
    },
    {
        "Internal ID": 203,
        "Name": "Test - Video Landing Page",
        "URL Component": "Test-Video-Landing-Page"
    },
    {
        "Internal ID": 93,
        "Name": "Test - Video Page Template",
        "URL Component": "Test-Video"
    },
    {
        "Internal ID": 211,
        "Name": "Test - Video Page Template Test",
        "URL Component": "Video-Page-Template-Test"
    },
    {
        "Internal ID": 38,
        "Name": "Test Holiday Shipping",
        "URL Component": "Test-Holiday-Shipping"
    },
    {
        "Internal ID": 237,
        "Name": "THE BEAT - Apparel & Accessories",
        "URL Component": "THE-BEAT-Apparel-Accessories"
    },
    {
        "Internal ID": 225,
        "Name": "THE BEAT - Articles/Guides",
        "URL Component": "THE-BEAT-Articles-Guides"
    },
    {
        "Internal ID": 234,
        "Name": "THE BEAT - Concert",
        "URL Component": "THE-BEAT-Concert"
    },
    {
        "Internal ID": 230,
        "Name": "THE BEAT - Cymbals & Gongs",
        "URL Component": "THE-BEAT-Cymbals-Gongs"
    },
    {
        "Internal ID": 228,
        "Name": "THE BEAT - Drum Heads",
        "URL Component": "THE-BEAT-Drum-Heads"
    },
    {
        "Internal ID": 229,
        "Name": "THE BEAT - Drums & Drum Sets",
        "URL Component": "THE-BEAT-Drums-Drum-Sets"
    },
    {
        "Internal ID": 235,
        "Name": "THE BEAT - Field Audio & Recording",
        "URL Component": "THE-BEAT-Field-Audio-Recording"
    },
    {
        "Internal ID": 227,
        "Name": "THE BEAT - Home",
        "URL Component": "The-Beat"
    },
    {
        "Internal ID": 231,
        "Name": "THE BEAT - Keyboards",
        "URL Component": "THE-BEAT-Keyboards"
    },
    {
        "Internal ID": 232,
        "Name": "THE BEAT - Latin, World, & Effects",
        "URL Component": "THE-BEAT-Latin-World-Effects"
    },
    {
        "Internal ID": 233,
        "Name": "THE BEAT - Marching",
        "URL Component": "THE-BEAT-Marching"
    },
    {
        "Internal ID": 238,
        "Name": "THE BEAT - Percussion News",
        "URL Component": "THE-BEAT-Percussion-News"
    },
    {
        "Internal ID": 226,
        "Name": "THE BEAT - Product Spotlights",
        "URL Component": "THE-BEAT-Product-Spotlights"
    },
    {
        "Internal ID": 236,
        "Name": "THE BEAT - Stands & Hardware",
        "URL Component": "THE-BEAT-Stands-Hardware"
    },
    {
        "Internal ID": 223,
        "Name": "THE BEAT - Sticks & Mallets",
        "URL Component": "THE-BEAT-Sticks-Mallets"
    },
    {
        "Internal ID": 222,
        "Name": "THE BEAT - Template Test",
        "URL Component": "THE-BEAT-Template-Test"
    },
    {
        "Internal ID": 224,
        "Name": "THE BEAT - Videos",
        "URL Component": "THE-BEAT-Videos"
    },
    {
        "Internal ID": 36,
        "Name": "Video - (Product Spotlight) (OLD) Tama Marching Percussion",
        "URL Component": "Tama-Marching-Percussion"
    },
    {
        "Internal ID": 219,
        "Name": "Video - (Product Spotlight) Dunnett James Trussart Collection Snare Drums",
        "URL Component": "Dunnett-James-Trussart-Collection-Snare-Drums"
    },
    {
        "Internal ID": 185,
        "Name": "Video - (Product Spotlight) DW Texas Snare Drums",
        "URL Component": "DW-Texas-Snare-Drums"
    },
    {
        "Internal ID": 265,
        "Name": "Video - (Product Spotlight) FX Cymbal Stacks & K Cluster Crashes",
        "URL Component": "K-Cluster-FX-Stacks"
    },
    {
        "Internal ID": 181,
        "Name": "Video - (Product Spotlight) Gentlemen's Series",
        "URL Component": "Gentlemens-Series"
    },
    {
        "Internal ID": 102,
        "Name": "Video - (Product Spotlight) Meinl Hand-Picked Cymbals",
        "URL Component": "Meinl-Hand-Picked-Cymbals"
    },
    {
        "Internal ID": 214,
        "Name": "Video - (Product Spotlight) Mike Balter Titanium Series",
        "URL Component": "Mike-Balter-Titanium-Series"
    },
    {
        "Internal ID": 217,
        "Name": "Video - (Product Spotlight) Paiste 2002 Big Beat Cymbals",
        "URL Component": "Paiste-2002-Big-Beat-Cymbals"
    },
    {
        "Internal ID": 220,
        "Name": "Video - (Product Spotlight) Paiste PSTX Effects Cymbals",
        "URL Component": "Paiste-PSTX-Effects-Cymbals"
    },
    {
        "Internal ID": 221,
        "Name": "Video - (Product Spotlight) Pearl Crystal Beat Acrylic Drum Sets",
        "URL Component": "Pearl-Crystal-Beat-Acrylic-Drum-Sets"
    },
    {
        "Internal ID": 218,
        "Name": "Video - (Product Spotlight) Pearl Flat Base Convertible 150 Series Hardware",
        "URL Component": "Pearl-Flat-Base-Convertible-150-Series-Hardware"
    },
    {
        "Internal ID": 175,
        "Name": "Video - (Product Spotlight) Sabian FRX Cymbals",
        "URL Component": "Sabian-FRX-Cymbals"
    },
    {
        "Internal ID": 215,
        "Name": "Video - (Product Spotlight) Yamaha Impact Drums",
        "URL Component": "Yamaha-Impact-Drums"
    },
    {
        "Internal ID": 216,
        "Name": "Video - (Product Spotlight) Yamaha Recording Custom Drum Sets",
        "URL Component": "Yamaha-Recording-Custom-Drum-Sets"
    },
    {
        "Internal ID": 91,
        "Name": "Video - A Better Way to Muffle Marching Bass Drums",
        "URL Component": "A-Better-Way-to-Muffle-Marching-Bass-Drums"
    },
    {
        "Internal ID": 268,
        "Name": "Video - A Detailed Guide to Hi Hat Clutches",
        "URL Component": "A-Detailed-Guide-to-Hi-Hat-Clutches"
    },
    {
        "Internal ID": 272,
        "Name": "Video - A Guide to How Drum Stick Design Affects Your Sound",
        "URL Component": "Stick-Anatomy"
    },
    {
        "Internal ID": 112,
        "Name": "Video - Black Swamp Tambourine Shootout",
        "URL Component": "Black-Swamp-Tambourine-Shootout"
    },
    {
        "Internal ID": 113,
        "Name": "Video - Black Swamp Triangle Shootout",
        "URL Component": "Black-Swamp-Triangle-Shootout"
    },
    {
        "Internal ID": 81,
        "Name": "Video - Canopus vs. Ludwig Snare Wires",
        "URL Component": "Canopus-vs-Ludwig-Snare-Wires"
    },
    {
        "Internal ID": 267,
        "Name": "Video - Dr. Beat Loop Function",
        "URL Component": "DB-90-Dr-Beat-Loop-Function"
    },
    {
        "Internal ID": 188,
        "Name": "Video - DW Texas Western Video",
        "URL Component": "DW-Texas-Western"
    },
    {
        "Internal ID": 266,
        "Name": "Video - Get Started with Drum Dampeners & Muffles",
        "URL Component": "Drum-Dampeners-Dampers-Muffles-Mutes"
    },
    {
        "Internal ID": 92,
        "Name": "Video - Hickory, Maple, and Oak Drumsticks: What's The Difference?",
        "URL Component": "Hickory-vs-Maple-vs-Oak-Drumsticks"
    },
    {
        "Internal ID": 298,
        "Name": "Video - How Should You Tune Your Marching Bass Line?",
        "URL Component": "How-Should-You-Tune-Your-Marching-Bass-Line"
    },
    {
        "Internal ID": 288,
        "Name": "Video - How to Install Your Advanced Bass Drum Muffling System",
        "URL Component": "How-to-Install-Your-Advanced-Bass-Drum-Muffling-System"
    },
    {
        "Internal ID": 290,
        "Name": "Video - Malletech M-Tech Marimba",
        "URL Component": "Malletech-M-Tech-Marimba"
    },
    {
        "Internal ID": 90,
        "Name": "Video - Mapex Armory Snare Drum Comparison",
        "URL Component": "Mapex-Armory-Snare-Drum-Comparison"
    },
    {
        "Internal ID": 108,
        "Name": "Video - Marimba Mic Mounting Tips",
        "URL Component": "Marimba-Mic-Mounting-Tips"
    },
    {
        "Internal ID": 107,
        "Name": "Video - Marimba Mic Shootout",
        "URL Component": "Marimba-Mic-Shootout"
    },
    {
        "Internal ID": 73,
        "Name": "Video - Mike Balter Titanium Series Mallets (Video)",
        "URL Component": "Mike-Balter-Titanium-Series-Vibraphone-Marimba-Mallets"
    },
    {
        "Internal ID": 71,
        "Name": "Video - Picking the Best Marching Bass Drum Mallets",
        "URL Component": "Picking-the-Best-Marching-Bass-Drum-Mallets"
    },
    {
        "Internal ID": 86,
        "Name": "Video - Red Rock Drums Interview",
        "URL Component": "Red-Rock-Drums-Interview"
    },
    {
        "Internal ID": 17,
        "Name": "Video - We Speak Drum",
        "URL Component": "We-Speak-Drum"
    }
];

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

const addToSpec = (selfTarget = false) => {
    let newSpecUrl = document.getElementById('spec-type').value;
    if (selfTarget) {
        window.open(newSpecUrl, '_self');
    } else {
        window.open(newSpecUrl);
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

const createInformationItemLinks = () => {
    let theBeat = document.getElementById('the-beat');
    let articles = document.getElementById('article');
    let videos = document.getElementById('video');
    let landingPages = document.getElementById('landing-page');
    let promos = document.getElementById('promo');
    let site = document.getElementById('site');
    let other = document.getElementById('other');
    let container = document.createElement('div');

    for (let infoItemData of informationItemData) {
        let title = infoItemData['Name'];
        let url = `https://www.lonestarpercussion.com/${infoItemData['URL Component']}.html`;

        let titleElement = document.createElement('li');

        let link = document.createElement('a');
        link.href = url;
        link.setAttribute('target', '_blank');
        link.innerText = infoItemData['Name'];

        titleElement.appendChild(link);

        if (title.startsWith('THE BEAT')) {
            theBeat.appendChild(titleElement);
        } else if (title.startsWith('Article')) {
            articles.appendChild(titleElement);
        } else if (title.startsWith('Video')) {
            videos.appendChild(titleElement);
        } else if (title.startsWith('Landing Page')) {
            landingPages.appendChild(titleElement);
        } else if (title.startsWith('Promo')) {
            promos.appendChild(titleElement);
        } else if (title.startsWith('Site')) {
            site.appendChild(titleElement);
        } else {
            other.appendChild(titleElement);
        }
    }
}
