const DEFAULT_GRID = 24;
const DEFAULT_COLOR = "rgb(255, 255, 255)"
const grid = document.getElementsByClassName('grid');
const gridSizeShow = document.getElementById('sliderValue');

let sizePicker = document.getElementById("sizeSlider");


sizePicker.addEventListener('change', function(e) {
    gridValue = e.target.value;
    gridSizeShow.innerText = `Grid size ${sizePicker.value} x ${sizePicker.value}`;
    console.log(gridSizeShow.innerText);
    console.log(gridValue);
})

createDiv = () => {
    var cel = document.createElement('div');
    cel.className = 'cel-div';
    cel.style.backgroundColor = DEFAULT_COLOR;

    return cel;
}

gridSize = () => {
    var grid = document.getElementsByClassName('grid');
    grid[0].style.gridTemplateColumns = `repeat(${DEFAULT_GRID}, 1fr)`;
    grid[0].style.gridTemplateRows = `repeat(${DEFAULT_GRID}, 1fr)`;
} 

generateGrid = (n) => {
    resetGrid()
    n = n*n
    for (i = 0; i < n; i++) {
        grid[0].appendChild(createDiv());        
    }
    gridSize();
    console.log(sizePicker.value);
}

resetGrid = () => {
    grid.innerHTML = '';
}


generateGrid(DEFAULT_GRID);
