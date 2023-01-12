const DEFAULT_COLOR = "333333";
const DEFAULT_MODE = 'monochrome';
const DEFAULT_SIZE = 16;

const sizeSlider = document.getElementById('sizeSlider');
const sliderValue = document.getElementById('sliderValue');
const colorValue = document.getElementById('colorPicker');
const grid = document.getElementById('grid');
const game = document.getElementById('game');
const color = document.getElementById('colorPicker');

color.onclick = (e) => e.target.value;
sizeSlider.onchange = (e) => changeGridSize(e.target.value);
game.onmousemove = (e) => changeColor(e)

divElementColor = (color) => {
    console.log('it is working!');
}

changeColor = (e) => {
    if(e.target.id === 'cel') {
        console.log(e.target.id);
        e.target.style.backgroundColor = color.value;

    }
}

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

updateSliderValue = (value) => {
    sliderValue.innerHTML = `Grid size: ${value} x ${value}`;
}

changeGridSize = (value) => {
    setCurrentSize(value);
    updateSliderValue(value);
    reloadGrid()
}

createGrid = (size) => {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        gridCel = document.createElement('div');
        gridCel.setAttribute('id', 'cel');
        gridCel.classList.add('cel-div');

        grid.appendChild(gridCel);
    }
}

window.onload = () => {
    createGrid(DEFAULT_SIZE);
    console.log(colorValue.value);
    console.log(game);
    console.log(color.value);
}