//Set up grid size button behavior
const size = document.querySelector("#size");
size.addEventListener("click", (e) =>{
    GridSize(16);//Placeholder value. Future version will prompt for grid size.
});

//Set up shake button behavior
const shake = document.querySelector("#shake");
shake.addEventListener("click", (e) => {
    ResetPixels();
});

//Changes the size of the grid
function GridSize(gridSize){
    //Delete existing grid
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel)=>{
        pixel.remove();
    })

    //Create new grid
    for(let i = 1; i <= gridSize; i++){
        const div = document.createElement("div");
        div.classList.toggle("pixels");
        div.id = i;
        container.appendChild(div);
    }

    //Add Event Listeners to the pixels.
    const newPixels = document.querySelectorAll(".pixels");
    newPixels.forEach((newPixel) => {
        newPixel.addEventListener("click",(e) => {
            newPixel.setAttribute("style","background-color:black")
        });
    });
}

//Reset all pixels to white
function ResetPixels(){
    const pixels = document.querySelectorAll(".pixels");
    pixels.forEach((pixel) => {
        pixel.setAttribute("style","background-color:white")
    });
}




