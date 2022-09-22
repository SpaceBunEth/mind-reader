// set Id to body
htmlBody = document.querySelector('body');
htmlBody.setAttribute('id','bodyid');

// const vars to create HTML Elements on DOM
const titleTextElem = document.createElement('h1');
const grButtonElem = document.createElement('button');
const nrButtonElem = document.createElement('button');
const helperTextElem = document.createElement('h3');
const supTextElem = document.createElement('h3');

// Creating Main Object to manage State
const mindReader = {
    currentPage: 0,
    specialSymbol: '&',
    symArray: ['!','@','#','$','%','^','*','~','?'],
    pageIndex: [
        //States of the 6 different pages for 'Mind Reader Program'
        pageOne={
            titleText: 'I can read your mind',
            grButton: 'Go',
            nrButton: 'none',
            helperText: 'none',
            supText: 'none',
        },
        pageTwo={
            titleText: 'Pick a number from 0 - 99',
            grButton: 'Refresh',
            nrButton: 'Next',
            helperText: 'When you have your number',
            supText: 'click next',
        },
        pageThree={
            titleText: 'Add both digits together to get a new number',
            grButton: 'Refresh',
            nrButton: 'Next',
            helperText: 'Ex: 14, 1 + 4 = 5',
            supText: 'click Next to proceed',
        },
        pageFour={
            titleText: 'Subtract your new number from the original number',
            grButton: 'Refresh',
            nrButton: 'Next',
            helperText: 'Ex: 14 - 5 = 9',
            supText: 'click Next to proceed',
        },
        pageFive={
            titleText: '...',
            grButton: 'Refresh',
            nrButton: 'Reveal',
            helperText: 'Find your new number',
            supText: 'Note the symbol beside the new number',
        },
        pageSix={
            titleText: 'specialSymbol',
            grButton: 'Refresh',
            nrButton: 'none',
            helperText: 'Your Symbol is:',
            supText: 'specialSymbol',
        },

    ]

}

//Update DOM State 
function Update() {
    console.log('Update')
    console.log('Page ', mindReader.currentPage)
    //If else statement for each state of HTML elements on the DOM in body
    // Will either create a html element based on state from mindReader.pageIndex[mindReader.currentPage]
    // Or run a funtion to clear that html element if the pageIndex array object is 'none' 
    if (mindReader.pageIndex[mindReader.currentPage].titleText == 'none') {
        clearDom('titleText');
    } else {
        htmlBody.appendChild(titleTextElem);
        titleTextElem.setAttribute('id', 'titleText');
        document.getElementById('titleText').innerHTML = mindReader.pageIndex[mindReader.currentPage].titleText;
    }
    if (mindReader.pageIndex[mindReader.currentPage].nrButton == 'none') {
        clearDom('nrButton');
    } else {
        htmlBody.appendChild(nrButtonElem);
        nrButtonElem.setAttribute('id','nrButton');
        document.getElementById('nrButton').innerHTML = mindReader.pageIndex[mindReader.currentPage].nrButton;
        document.getElementById('nrButton').addEventListener('click', nrButtonClick);
    }
    if (mindReader.pageIndex[mindReader.currentPage].helperText == 'none') {
        clearDom('helperText');
    } else {
        htmlBody.appendChild(helperTextElem);
        helperTextElem.setAttribute('id','helperText');
        document.getElementById('helperText').innerHTML = mindReader.pageIndex[mindReader.currentPage].helperText;
    }
    if (mindReader.pageIndex[mindReader.currentPage].supText == 'none') {
        clearDom('supText');
    } else {
        htmlBody.appendChild(supTextElem);
        supTextElem.setAttribute('id','supText');
        document.getElementById('supText').innerHTML = mindReader.pageIndex[mindReader.currentPage].supText
    }
    if (mindReader.pageIndex[mindReader.currentPage].grButton == 'none') {
        clearDom('grButton');
    } else {
        htmlBody.appendChild(grButtonElem);
        grButtonElem.setAttribute('id','grButton');
        document.getElementById('grButton').innerHTML = mindReader.pageIndex[mindReader.currentPage].grButton;
        document.getElementById('grButton').addEventListener('click', grButtonClick);

    }
}

// Clearing Dom of HTML Elements
// Will Check if and HTML Element with an id passed through elementId is a null value or not
// If not and a HTML Element with that id is present the function clearDom will delete it from the Dom
function clearDom(elementId) {
    if (document.getElementById(elementId) !== null){
        htmlBody.removeChild(document.getElementById(elementId));
        console.log('ClearDom of' + elementId)
        // htmlBody.innerHTML = '';
        
    }
}

//set currentPage = 0 Which is our pageOne object state
mindReader.currentPage = 0;

//Click Event Listeners for buttons Line 130 - 162

//revised event click listener functions different from pseudocode
// Had to add a removeEventListener to avoid a infinate loop
// The DOM completely re-writes itself every time Update() function is ran

// grButton clickEvent
function grButtonClick() {

    document.getElementById('grButton').removeEventListener('click', grButtonClick);// removes event

    if (mindReader.pageIndex[mindReader.currentPage].grButton === 'Go'){ // Moves to next page
        mindReader.currentPage = mindReader.currentPage + 1;
        console.log('grButton Move to Next Page')
        Update();
    } else if (mindReader.currentPage === 5) { // Goes to page 1 when user reaches the end
        mindReader.currentPage = 0;
        console.log('Play Again?')
        Update();
    } else {                    // Removes all children in DOM under body 
        htmlBody.innerHTML = '';
        console.log('emptyDOM');
        Update();
    }

 
}

// nrButton clickEvent
function nrButtonClick() {
    document.getElementById('nrButton').removeEventListener('click', nrButtonClick);// removes event
    if (mindReader.pageIndex[mindReader.currentPage].nrButton == 'Next' || mindReader.pageIndex[mindReader.currentPage].nrButton == 'Reveal'){
        mindReader.currentPage = mindReader.currentPage + 1;
        console.log('nrButton Move to Next Page');
        Update();
    }
}

// Random Number Helper Function

// Not the same as pseudo had to add another var and change some logic
function rndNum() {
    for (let i = 0; i < 91; i++){// repeats 100 times
        let holderNumber = Math.round(Math.random() * mindReader.symArray.length); // get a random number rang from 0 to the .length of symArray,
        let holderSymbol = mindReader.symArray[holderNumber]; 
        while (holderSymbol == undefined){ // had and issue of getting 'undefined' values in array used to while to fix that.
            console.log(holderNumber, holderSymbol);
            holderNumber = Math.round(Math.random() * mindReader.symArray.length); // get a random number rang from 0 to the .length of symArray,
            holderSymbol = mindReader.symArray[holderNumber];
        }
        mindReader.symArray.push(holderSymbol); // adds the new random symbol to the array
    }
}

// Mulitples of Nine Helper Function
mindReader.pageIndex[5].titleText = mindReader.specialSymbol;

// Replace mulitples of 9 in mindReader.symArray with mindReader.specialSymbol

function replaceNines() {
    for (let i = 0; i < 99; i++){
        if (i % 9 == 0 || i == 0){ // if i is a multiple of 9 or equal to 0
            mindReader.symArray[i] = mindReader.specialSymbol; // replaces the item in the array with specialSymbol
            console.log('Changed Index Content', i, mindReader.symArray[i]);
        } else {
            console.log('No Change')
        }
    }
}

rndNum()
replaceNines()
mindReader.pageIndex[4].titleText = mindReader.symArray




Update();

