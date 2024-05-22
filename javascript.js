//Create initial divs in container
const container = document.querySelector("#container");
gridSize(16);


//Changes the size of the grid
function gridSize(gridSize){
    for(let i = 1; i <= gridSize; i++){
        const div = document.createElement("div");
        div.classList.toggle("pixels");
        div.textContent = "Test"; //Testing purposes onlycontainer.appendChild(div);
        container.appendChild(div);
    }
}

