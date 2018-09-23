// variable to count the grid
let funcCalled = 0;

// Select color input
let color = document.querySelector("#colorPicker");
color.addEventListener("change", function(event) {
  color.setAttribute('value',event.target.value);
});

// Select size input
let height = document.querySelector("#inputHeight");
 height.addEventListener("input", function(event) {
  height.setAttribute('value',event.target.value);
});
let width = document.querySelector("#inputWidth");
width.addEventListener("input", function(event) {
  width.setAttribute('value',event.target.value);
});

// create a grid with chosen height and width
function makeGrid() {
funcCalled += 1;
let table = document.querySelector("#pixelCanvas")
for(let height1 = height.value; height1> 0; --height1) {
    let row = document.createElement("tr")
    table.appendChild(row);
    for (let width1 = width.value; width1 > 0; --width1) {
        let column = document.createElement("td")
        row.appendChild(column);
      }
    };
};

// remove the grid
function removeGrid() {
  let table = document.getElementById("pixelCanvas");
  while (table.firstChild) {
    table.removeChild(table.firstChild);}
}

// set/unset background color to the squares
function colorCell() {
if (funcCalled > 0) {
    let cell = document.querySelectorAll("td");
    cell.forEach(function(el){el.addEventListener("click", function() {
      el.style.backgroundColor == false ?  el.style.backgroundColor = color.value : el.setAttribute("style","")
    })});
  }
};

// When size is submitted by the user, call makeGrid()
document.querySelector("#sizePicker").addEventListener("submit", function(event){
    event.preventDefault();
});
document.querySelector("#sizePicker").addEventListener("submit", function(){
        if (funcCalled === 0) {
        makeGrid();
        colorCell();
      } else {
        removeGrid();
        makeGrid();
        colorCell();
      }
});
