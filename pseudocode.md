# Mind Reader Pseudocode Program

## Outline 
1. Pseudocode the problem in its entirety before you start coding
2. Use JavaScript to successfully show the transition from one view to the next view
3. Successfully show state management for each step of the single page app ("view" 1, 2, 3, ...)
    1. Only create a single index.html
    2. No need to refresh the page (manually or using JS)
    3. Update state using a variable that tells the computer what 'view' it is
    4.  Use functions to move forward a view, backward, reset to the first view, and display the correct view on load / after every state change
4. Use Icons of your choice, we recommend either Bootstrap Icons (best) or Font Awesome (second best) but feel free to find your own
5. All multiples of 9 should be the same symbol (this is important for the math gimmick to work)


## About 
[README](README.md)

We are going to break down our Mind Reader program into pseudocode. We'll start by detailing how the this program will write to the DOM.

Javascript has the ability to write, delete, and change html and css to our DOM, which would allow us to change elements on the page without refreshing the page. [View this article](https://www.educative.io/answers/how-to-add-an-id-to-element-in-javascript) for creating HTML Element with JS.

We will be laying the elements and states of what our program will hold. 
Looking at the MindReader Adobe XD wireframe. We can visually see certian changes occur when the buttons are pressed. 

Here are some 'elements' of the wireframe that we can use to help create our states and beginning logic. 

The visual changes we see can be sectioned out into these 'elements'

- Title Text
- go/refresh Button
- Next/Reveal Button
- Helper Text
- Sup Text

To create the actual 'Mind Reading' part of the program we need to remember the random displayed symbols that will be paired with a random number 0 - 99. Except for one symbol that will be paired with all multiples of 9. 

How do we now which number is a multiple of 9? We can use the javascript % remainder operator to test whether if a number is a mulitple of 9.
If we get a remainder other then 0 we can determine it is not a multiple of 9.

- Numbers 0 - 99 list
- Symbols, exclude one symbol for the mulitples of 9 
- Mulitples of 9
- Pair special symbol to the mulitples of 9
- insert back into the list of Numbers

Now we need to remember the logic and state of our page.  
We need a way to keep track of our pages and which page should be displayed on the current html DOM. One way we can keep of our page is to have a list that holds the index of pages. In this program we have 6 different pages or states of out page.
The information or state a single page would hold is


- currentPage: the current page being viewed
- specialSymbol: ex: &
- symArray: list of symbols
- numArray: Numbers list 0 - 99
- Array Based PageIndex: 
    - Title Text
    - go/refresh Button
    - Next/Reveal Button
    - Helper Text
    - Sup Text

Notes:

Func: generate a random number between index of symArray, insert new random symbol into long 0-99 array

Func: use symbol list index for random numbers, if index of special symbol is a multiple of 9 then replace random symbol with special symbol.

Func: Handler for when html needs to change we can reference our data from our "OBJ Based on PageIndex" might be called Update()


## INIT()

### States

#### States of HTML Elements that will change in DOM:

```
titleText
grButton
nrButton
helperText
supText

```

#### States that manage HTML Elements:

```

currentPage
specialSymbol
symArray
pageIndex
```
 In 'pageIndex' list Create a Javascript object to manage the state of each page, 6 pages 6 objects in total.

Object contents are HTML Element States with currentPage value pointing to the index within pageIndex. 

```
titleText
grButton
nrButton
helperText
supText

```


### HTML Setup

For each page we generate/ create with html elements using javascript. We want to have a basic predefined setup. 

We will be starting with a basic html page that has bootstrap css and js tags.

Using Javascript HTML DOM we can edit the DOM.

We create the name and html element that will go in the body of our DOM and relate it to keys within our objects.

**EX:** <br />
`currentPage = 0`
```
Object page 0 {
    
    titleText: "I can read your mind", 
    grButton: 'Go',
    nrButton: 'none',
    helperText: 'none',
    supText: 'none
}
```
`HTML Elements`
```
<h1 id="titleText"></h1>
<button id="grButton"></button>
```

if key in object is equal to string 'none' dont make a html element

#### INIT HTML SetUp Javascript DOM (At Start Up)

```
add a id to body 'bodyid'
select the body tag with querySelector()
set var htmlBody to htmlelementbyid 'body'
set object.currentPage to equal 0

const titleTextElem = document.createElement('h1')
const grButtonElem = document.createElement('button')
const nrButtonElem = document.createElement('button')
const helperTextElem = document.createElement('h3')
const supTextElem = document.createElement('h3')


// hold states of the pages 
create mindReader object{
    currentPage
    specialSymbol
    symArray
    pageIndex[
        Object page 0 {
            titleText: "I can read your mind", 
            grButton: 'Go',
            nrButton: 'none',
            helperText: 'none',
            supText: 'none
        }
        object page 1
        object page 2
        object page 3
        object page 4
        object page 5
    ]
}

run function update()
```

### Func

UPDATE()

```
//Needs to happen 5 times for each key in the objects page.

If Object MindReader => PageIndex Arry => Object Page 0[currentPage value] => Key TitleText 
    Is equal to 'none'
    Do not appendchild html element
Else
    htmlbody.appendchild(titleTextElem)
    titleTextElem.setAttribute('id', 'titleText')
    document.getElementById("titleText").innerHTML = The value of Object MindReader => PageIndex Arry => Object Page 0[currentPage value] => Key TitleText;
```
Two click Event listeners will need to be added inorder to help change or refresh the page, however depending on the state of the buttons sometimes the button will change the page other times it will only refresh the page. We can call a function after the 'click' that will contain a if else statement that reads the state of the button for the current page then either + 1 to currentPage value then runs Update() or simply run update keeping the currentPage value the same.

ClickEventlistener for grButton same/ similar code for nrButton
go into an arrow function for each click event.
```
// grButton clickEvent
document.getElementById("grButton").addEventListener('click', () => {
    if Obj mindReader, pageIndex[currentPage],Obj page # key 'Go'
        Obj-path to currentPage = currnetPage + 1
        Update()
    else 
        Update()
        
}
// nrButton clickEvent
document.getElementById("nrButton").addEventListener('click', () => {
    if Obj mindReader, pageIndex[currentPage],Obj page # key 'next' || 'reveal'
        Obj-path to currentPage = currnetPage + 1
        Update()
    else 
        Update()
```

### Helper functions

**Random Function for Symbols Array**

We need a helper function to get a random number based on 0 to the current length of the array that holds our symbols, [symArray], then take that random number, const holdSymbol = symArray[randomNumber], Add value of holdSymbol to end of symArray. Repeat until symArray index value is equal to 99. 

Now we have to replace all symArray index numbers that are mulitples of 9 with our special character. "&"

We can do this by use the % operator in Javascript, which outputs the remainder of two Numbers. First number would be 9, second Number will be a (symArray Index Number). We could hardcode for all mulitples of 9 to be prestored and use a number of if statements but a loop 0-99 with a if 9%indexvalue == 0 then replace content of indexvalue with specialSymbol. Will be less code and easier to write.

**RandomNumberFunc**

This is re-assigning the value of symArray in our MindReader Obj
```
Call function randomNumber {
    for (let i = 0; i < 100; i++){
        const holderSymbol = Math.floor(Math.random() * symArray.lendth);
        add holderSymbol to symArray; symArray.push(holderSymbol)
    }
}
```

Replace the symArray index's content, of indexes that are mulitples of 9 with specialSymbol.

```
Call function replaceNines{
    for (let i = 0; i < 99; i++){
        if (symArray[i] % 9 == 0 || i == 0){
            symArray[i] = SpecialSymbol;
        } else {
            do nothing
        }

    }
}
```

<hr>

# After Demo Day Part2

## Bootstrap 
A big part of our program is the UI. Bootstrap will handle all styling of our program. How can we add bootstrap css to our program if all HTML elements are written in Javascript and not present until generated by a function? Bootstrap can be aplied to HTML classes. Useing a javascript .setAttribute('class','Bootstrapcode') HTML DOM Element.

Since we have already defined our elements and aplied a custome id to them it should be very easy to set a class attribute.

We could even go as far as placing our createhtmlelements in our mindReader object along with our setAttributes to make calling and creating them much easier. BUT we will save that idea for another time.

However it will be necessary to added our bootstrap classes as a state to our mindReader.pageIndex[currentPage].Page# object. By setting our Bootstrap class to a object key. Changing styles will be much more easier to test and run then playing with our already working Functions.

We will need to add one line of code to our Update() function if else statements for each UI state. Since we've already named our html elements id's after their respective Object key name. We can call our html elements by id and set a 'class' attribute. 




### To-Do
- reset currentPage value to everytime it incermits past 5
- find a way to display all 0-99 symbols and numbers from symArray and symArray[indexes]
- figure out how to get bootstrap Icons and bootstrap stylings onto DOM.
- Goback button needs to be added to every page
- bootstrap needs to be added

### TO-DO Notes:
- Some logic in the update() function and click event listeners for grButton and nrButton is faulty in this pseudo-code changes will be made to this markdown doc after a css and bootstrap section is created.

-documentation of helper functions is also need follow faulty logic after a javascript test.
