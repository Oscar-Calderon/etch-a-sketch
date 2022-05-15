let sketchGrid = document.querySelector(".sketch-grid");

populateGrid(16); // esta crea la grilla inicial


//14 DE MAYO: FALTA AGREGAR EL BOTON BLANCO PARA BORRAR, CAMBNIAR EL EVENT POR MOUSE CLICK Y PONERLO BONITO TODO
// Una funcion para poblar la grid
function populateGrid(size){
    sketchGrid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${size} , 1fr)`;    
    for(let i = 0; i<(size*size); i++){
        let div = document.createElement("div");
        div.classList.add("square")
        div.textContent = i + 1;
        sketchGrid.appendChild(div);
        /* div.addEventListener("mouseover", colorMeDefault())/*() => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
            div.style.backgroundColor = "black";
        }) */
    }
    colorMeDefault();
}

function colorMeDefault(){
    let gridSquares = document.querySelectorAll(".square");  
    gridSquares.forEach((square) => {
        //square.removeEventListener("mouseover", colorMeDefault);
        square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
            square.style.backgroundColor = "black";
        })
    })
    
    //gridSquares.forEach((square) => {
    //square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
    //square.style.backgroundColor = "black";
    //})
}

function eraser(){
    let gridSquares = document.querySelectorAll(".square");
    gridSquares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "white";
        })
    })
}


//let gridSquares = document.querySelectorAll(".square");

function colorMeRandom(){ 
    let gridSquares = document.querySelectorAll(".square");  
    gridSquares.forEach((square) => {
        //square.removeEventListener("mouseover", colorMeDefault);
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
        square.style.backgroundColor = "#" + randomColor;
        })
    })
     //gridSquares.forEach((square) => {
    /*
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
    square.style.backgroundColor = randomColor;
    })

    */
}





/*
let gridSquares = document.querySelectorAll(".square");
console.log(gridSquares);
gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
        square.style.backgroundColor = "blue";
    })
})

*/

//Hay que hacer una funcion para colorear
function resetGrid(){
    while (sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.lastChild);
    }
}

function onClick($this) {
    let val = $this.previousElementSibling.value;
    if(val === '0' || val >= 50){ //si es 0 o mayor a 100, no deberia crear la grilla
        console.log('no input');
    }else{ // si es valido el tamaño, generar la grilla, o sea, correr populateGrid
        console.log(val);
        resetGrid();
        populateGrid(val); //falta que los nuevos cabros tengan el event listener
    }
  }



/* 
for(let i = 0; i<size; i++){
        let div = document.createElement("div");
        div.textContent = i + 1;
        sketchGrid.appendChild(div);
    }
*/

//botones que coloreen negro los cuadros con un event listener y otros que coloreen random