const grid = document.querySelector(".grid");
const button = document.querySelector(".gridSize")
button.addEventListener("click", setSize);

function createGrid(num) {
  for (let i = 0; i < num * num; i++ ) {
    let cell = document.createElement('div');
    cell.classList = "cell";
    grid.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    grid.insertAdjacentElement('beforeend', cell);
  };
  let cells = grid.querySelectorAll('div')
  cells.forEach( cell => cell.addEventListener('mouseover', generateColor));
}

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  this.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
}

function setSize() {

  let size = prompt("Enter a value between 1 - 100:");
    if (size < 1 || size > 100) {
      alert ("Please enter a number from 1-100.");
      setSize();
    } else {
      resetGrid();
      createGrid(size);
    }
}

function resetGrid() {
  const deleteGrid = Array.from(grid.childNodes);
  deleteGrid.forEach(e => grid.removeChild(e));
}

createGrid(10);