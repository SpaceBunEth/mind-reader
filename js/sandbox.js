console.log('test1')

function spacebun() {
    const bodyHTML = document.querySelector('body');
    bodyHTML.setAttribute('id','somename')
    const elemDiv = document.createElement('div');
    bodyHTML.appendChild(elemDiv)
    elemDiv.setAttribute('id', 'div-id')
    const editDiv = document.getElementById("div-id").innerHTML = "New text!";
    console.log('test')
};

function clearPg() {
    const bodyHTML = document.getElementById('somename');
    const elemDiv = document.getElementById('div-id');
    bodyHTML.removeChild(elemDiv);
}