let sketchGrid = document.querySelector(".sketch-grid");


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

populateGrid(20);

/* 
for(let i = 0; i<size; i++){
        let div = document.createElement("div");
        div.textContent = i + 1;
        sketchGrid.appendChild(div);
    }
*/