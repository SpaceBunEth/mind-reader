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
            grButton: 'refresh',
            nrButton: 'none',
            helperText: 'Your Symbol is:',
            supText: 'specialSymbol',
        },

    ]

}
//set currentPage = 0 Which is our pageOne object state
mindReader.currentPage = 0;

//Update DOM State 
function Update() {
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
    }
}

// Clearing Dom of HTML Elements
// Will Check if and HTML Element with an id passed through elementId is a null value or not
// If not and a HTML Element with that id is present the function clearDom will delete it from the Dom
function clearDom(elementId) {
    if (document.getElementById(elementId) !== null){
        htmlBody.removeChild(document.getElementById(elementId));
    }
}

Update()