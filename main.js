let sketchGrid = document.querySelector(".sketch-grid");
let gridSquares;
let isDrawing = false;
let colorPicked = "black";
let gridSize = 16;


/*console.log(slider.value);
slider.addEventListener("change", () => {
    //console.log(slider.value);
    gridSize = slider.value; // esto me esta dando el valor del slider
});
*/

function slide() {
    let slider = document.getElementById("slider");
    document.querySelectorAll("label")[0].innerText = slider.value + " x " + slider.value;
    gridSize = slider.value;
    // startAgain(); Esto es para que se cree la grilla altiro
  }

//Initiliazing grid state
populateGrid(gridSize);
colorSquare(colorPicked)

buttons = document.querySelectorAll(".color-btn");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        changeColor(e.target.id)
        colorSquare(colorPicked)
    })
})



function changeColor(colorID) {
    colorPicked = colorID;
}

function colorSquare(color) {
    gridSquares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            isDrawing = true;
        })
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
        })
        square.addEventListener("mouseup", () => {
            isDrawing = false;
        })
    })
}

function populateGrid(size) {
    sketchGrid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    for (let i = 0; i < (size * size); i++) {
        let div = document.createElement("div");
        div.classList.add("square")
        //div.textContent = i + 1;
        sketchGrid.appendChild(div);
    }
    gridSquares = document.querySelectorAll(".square");
}

function resetGrid() {
    while (sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.lastChild);
    }
    colorPicked = "black";
}

function startAgain() {
    resetGrid();
    populateGrid(gridSize);
    colorSquare(colorPicked)
    /*let val = $this.previousElementSibling.value;
    if (val === '0' || val >= 50) { //si es 0 o mayor a 100, no deberia crear la grilla
        console.log('no input');//Poner mensaje que no se puede generar la grilla
    } else { // si es valido el tamaño, generar la grilla, o sea, correr populateGrid
        console.log(val);
        resetGrid();
        populateGrid(val);
        colorSquare(colorPicked)
    }
    */
}


/*
function colorMeDefault(){
    //let gridSquares = document.querySelectorAll(".square");  
    gridSquares.forEach((square) => {
        //square.removeEventListener("mouseover", colorMeDefault);
        square.addEventListener("mousedown", () => {
            isDrawing = true;
        })
        square.addEventListener("mousemove", () => {
            if(isDrawing === true){
                square.style.backgroundColor = "black";
            }            
        })
        square.addEventListener("mouseup", () => {
            isDrawing = false;
        })               
    })
}

function eraser(){
    //let gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    })
}

function colorMeRandom(){ 
    //let gridSquares = document.querySelectorAll(".square");  
    gridSquares.forEach((square) => {
        //square.removeEventListener("mouseover", colorMeDefault);
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.addEventListener("mouseover", () => { 
        square.style.backgroundColor = "#" + randomColor;
        })
    })
}
*/