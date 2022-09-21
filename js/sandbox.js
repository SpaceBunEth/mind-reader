function spacebun() {
    const bodyHTML = document.querySelector('body');
    bodyHTML.setAttribute('id','somename')
    const elemDiv = document.createElement('div');
    bodyHTML.appendChild(elemDiv)
    elemDiv.setAttribute('id', 'div-id')
    
}