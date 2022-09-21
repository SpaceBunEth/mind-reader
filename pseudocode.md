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
pageOne {
    
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
set var htmlBody to htmlelementbyid 'body'
set object.currentPage to equal 0

const titleTextElem = document.createElement('h1')
const grButtonElem = document.createElement('button')
const nrButtonElem = document.createElement('button')
const helperTextElem = document.createElement('h3')
const supTextElem = document.createElement('h3')

run function update()
```

### Func

UPDATE()

```
htmlBody.appendchild('')






```


