let sketchGrid = document.querySelector(".sketch-grid");


populateGrid(16); // esta crea la grilla inicial

// Una funcion para poblar la grid
function populateGrid(size){
    sketchGrid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    sketchGrid.style.gridTemplateRows = `repeat(${size} , 1fr)`;    
    for(let i = 0; i<(size*size); i++){
        let div = document.createElement("div");
        div.classList.add("square")
        div.textContent = i + 1;
        sketchGrid.appendChild(div);
        // div.addEventListener("hover", colorMe()) // ???????
    }
}


let gridSquares = document.querySelectorAll(".square");
console.log(gridSquares);
gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => { // esto deberia ser una funcion aparte para llamarla despues de clickear el boton
        square.style.backgroundColor = "blue";
    })
})

//Hay que hacer una funcion para colorear
function resetGrid(){
    while (sketchGrid.firstChild) {
        sketchGrid.removeChild(sketchGrid.lastChild);
    }
}

function onClick($this) {
    var val = $this.previousElementSibling.value;
    if(val == ''){ //si es 0 o mayor a 100, no deberia crear la grilla
        console.log('no input');
    }else{ // si es valido el tamaño, generar la grilla, o sea, correr populateGrid
        console.log(val);
        resetGrid();
        populateGrid(val); //falta que los nuevos cabros tengan
    }
  }



/* 
for(let i = 0; i<size; i++){
        let div = document.createElement("div");
        div.textContent = i + 1;
        sketchGrid.appendChild(div);
    }
*/