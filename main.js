let sketchGrid = document.querySelector(".sketch-grid");
let body = document.body;
let gridSquares;
let isDrawing = false;
let colorPicked = "black";
let gridSize = 16;


function slide() {
    let slider = document.getElementById("slider");
    document.querySelectorAll("label")[0].innerText = "Grid size " + slider.value + " x " + slider.value;
    gridSize = slider.value;
};

//Initiliazing grid state
populateGrid(gridSize);

buttons = document.querySelectorAll(".color-btn");
buttons.forEach((button) => {
    button.addEventListener("click", clickButton)
});

function clickButton(e) {
    changeColor(e.target.id)
    colorSquare(colorPicked)
    buttons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");
};


function changeColor(colorID) {
    colorPicked = colorID;
};

function colorSquare(color) {
    gridSquares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            isDrawing = true;
        });
        square.addEventListener("mouseover", () => {
            if (isDrawing === true) {
                if (color === 'rColor') {
                    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                    square.style.backgroundColor = "#" + randomColor;
                }
                else {
                    square.style.backgroundColor = color;
                }
            }
        });
        body.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    });
};

function populateGrid(size) {
    sketchGrid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add("square")
        sketchGrid.appendChild(div);
    }
    gridSquares = document.querySelectorAll(".square");
    colorSquare(colorPicked);
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

// Solucionar tema event listeners y funcion colorSquare. Laguea el pc porque se agregan cada vez que clickeas un boton