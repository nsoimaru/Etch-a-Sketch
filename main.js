const DEFAULT_COLOR = "rgb(255, 255, 255)";
const DEFAULT_SIZE = 16;
const sizeSlider = document.getElementById('sizeSlider');

const grid = document.getElementById('grid');
sizeSlider.onchange = (e) => changeGridSize(e.target.value);

setCurrentSize = (newSize) => {
    currentSize = newSize;
}

clearGrid = () => {
    grid.innerHTML = '';
}

reloadGrid = () => {
    clearGrid();
    createGrid(currentSize);
}

changeGridSize = (value) => {
    setCurrentSize(value);
    reloadGrid()
}

createGrid = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        gridCel = document.createElement('div');
        gridCel.classList.add('cel-div');

        grid.appendChild(gridCel);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}