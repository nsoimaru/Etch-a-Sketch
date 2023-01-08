var DEFAULT_GRID = 18;
var DEFAULT_COLOR = "rgb(255, 255, 255)"
var sizePicker = document.getElementById("sizeSlider");

const grid = document.getElementsByClassName('grid');

var size = sizePicker.addEventListener('change', function(e) {
    gridValue = e.target.value;
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
    console.log(size);
}

resetGrid = () => {
    grid.innerHTML = '';
}

generateGrid(DEFAULT_GRID);
