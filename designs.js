// Select color input
// Select size input
const rows = document.getElementById('inputHeight');
const columns = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');



// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(event) {
    pixelCanvas.innerHTML = '';
    event.preventDefault();
    makeGrid();
});
pixelCanvas.addEventListener('click', function(event){
    if (event.target.nodeName ==='TD'){
        event.target.style.backgroundColor = colorPicker.value;
    }
})
function makeGrid() {
    for (let i=0; i< rows.value; i++ ) {
        const row = pixelCanvas.insertRow(0);
        for (let j=0; j<columns.value; j++) {
            row.insertCell(0);
        }
    }
// Your code goes here!

}

