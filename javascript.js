//Default window.
GridSize(16);

//Set up grid size button behavior
const size = document.querySelector("#size");
size.addEventListener("click", (e) =>{
    let size = prompt("Enter a grid size between 1 and 100:", "16");
    if(size < 16 || size > 100) {
        GridSize(16);
        alert("Size not allowed, defaulted to minimum.")
    } else{
        GridSize(size);
    }
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
        newPixel.addEventListener("mouseover",(e) => {
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




