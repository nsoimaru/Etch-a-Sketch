var DEFAULT_GRID = 16;
var DEFAULT_COLOR = "rgb(186, 218, 218)"

const grid = document.getElementsByClassName('grid');
const sizePicker = document.getElementById('sizeSlider');

createDiv = () => {
    var cel = document.createElement('div');
    cel.className = 'cel-div';
    cel.style.backgroundColor = DEFAULT_COLOR;

    return cel;
}

// sizePicker.onmousemove = (e) => updateSizeValue(e.target.value);
// sizePicker.onchange = (e) => changeSize(e.target.value);

// gridSize

generateGrid = (n) => {
    for (i = 0; i < n; i++) {
        grid[0].appendChild(createDiv());
    }
}

console.log(sizePicker.value);
generateGrid(DEFAULT_GRID);
