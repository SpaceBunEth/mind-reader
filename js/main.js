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
            titleText: '',
            grButton: '',
            nrButton: '',
            helperText: '',
            supText: '',
        },
        pageTwo={
            titleText: '',
            grButton: '',
            nrButton: '',
            helperText: '',
            supText: '',
        },
        pageThree={
            titleText: '',
            grButton: '',
            nrButton: '',
            helperText: '',
            supText: '',
        },
        pageFour={
            titleText: '',
            grButton: '',
            nrButton: '',
            helperText: '',
            supText: '',
        },
        pageFive={
            titleText: '',
            grButton: '',
            nrButton: '',
            helperText: '',
            supText: '',
        }
    ]

}

