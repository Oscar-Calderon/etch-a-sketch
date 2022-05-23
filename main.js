let sketchGrid = document.querySelector(".sketch-grid");
let body = document.body;
let gridSquares;
let isDrawing = false;
body.onmousedown = () => (isDrawing = true)
body.onmouseup = () => (isDrawing = false)
let colorPicked = "black";
let gridSize = 16;


buttons = document.querySelectorAll(".color-btn");
buttons.forEach((button) => {
    button.addEventListener("click", clickButton)    
});

function slide() {
    let slider = document.getElementById("slider");
    document.querySelectorAll("label")[0].innerText = "Grid size " + slider.value + " x " + slider.value;
    gridSize = slider.value;
};

function clickButton(e) {
    changeColor(e.target.id)
    buttons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
};


function changeColor(colorID) {
    colorPicked = colorID;
};

function colorSquare(e) {
    if (!isDrawing) return
    if (colorPicked === 'rColor') {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        e.target.style.backgroundColor = "#" + randomColor;
    }
    else {
        e.target.style.backgroundColor = colorPicked;
    }
};

function populateGrid(size) {
    sketchGrid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add("square")
        div.addEventListener("mouseover", colorSquare)
        sketchGrid.appendChild(div);
    }
    gridSquares = document.querySelectorAll(".square");  
};

function clearGrid() {
    gridSquares.forEach((square) => {
        square.style.backgroundColor = "white";
    })
};

function startAgain() {
    while (sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.lastChild);
    }
    populateGrid(gridSize);
};

//Initiliazing grid state
populateGrid(gridSize);
