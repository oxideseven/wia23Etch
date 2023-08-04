
let canvasSize = 16; //default grid size by edge.
let cellDimensions; 
let currentColor = `teal`;

const canvasContainer = document.getElementById(`canvas`);
const canvasSizeButton = document.getElementById(`sizeButton`);
const eraseButton = document.getElementById(`eraseButton`);

canvasSizeButton.addEventListener(`click`, askSize);
eraseButton.addEventListener(`click`, eraseCanvas);

// Creates a grid based on user input. using nested loop to ID cells.
function createGrid() {
    
    initializeGrid();
    
    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++){

            const div = document.createElement(`div`);

            div.classList.add(`cell`);
            div.setAttribute(`id`, `cell${i}x${j}`);
            div.setAttribute(`style`, `height: ${cellDimensions}px; width: ${cellDimensions}px;`);
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = currentColor;
            });
            
            canvasContainer.appendChild(div);
        }
    }  
/*

    const cells = document.querySelectorAll(`.cell`);

    // Sets the dimension of all cells to fit the grid.
    cells.forEach((cell) => {       
        cell.setAttribute(`style`, `height: ${cellDimensions}px; width: ${cellDimensions}px;`);
    });

    // Adds color or removes it based on click.
    cells.forEach((cell) => {       
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = currentColor;
        });
    });

*/

}

function initializeGrid() {
    canvasContainer.innerHTML = ``;
    cellDimensions = 800 / canvasSize;
}

function eraseCanvas() {
    const cells = document.querySelectorAll(`.cell`);
    cells.forEach((cell) => {       
        cell.style.backgroundColor = ``;
    });
}



// Changes the canvase size
function askSize() {
    canvasSize = prompt('Enter new Canvas size (1 - 100): ');
    if ((canvasSize == ``) || (canvasSize == null)) {
        canvasSize = 16;
    } else if ((canvasSize > 100) || (isNaN(canvasSize)) || (canvasSize < 1)) {
        askSize();
    }

    createGrid();
}


createGrid();



