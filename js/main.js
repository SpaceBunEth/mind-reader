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
            titleText: specialSymbol,
            grButton: 'refresh',
            nrButton: 'none',
            helperText: 'Your Symbol is:',
            supText: specialSymbol,
        },

    ]

}
//set currentPage = 0 Which is our pageOne object state
mindReader.currentPage = 0;

//Update DOM State 


/* //Needs to happen 5 times for each key in the objects page.

If Object MindReader => PageIndex Arry => Object Page 0[currentPage value] => Key TitleText 
    Is equal to 'none'
    Do not appendchild html element
Else
    htmlbody.appendchild(titleTextElem)
    titleTextElem.setAttribute('id', 'titleText')
    document.getElementById("titleText").innerHTML = The value of Object MindReader => PageIndex Arry => Object Page 0[currentPage value] => Key TitleText;
*/
