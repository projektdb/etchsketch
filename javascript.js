let color = "black";
let mouseDown = false


function populateBoard(size) {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

let amount = size * size

for(let i = 0; i<amount; i++) {
    
    let square = document.createElement('div');
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    square.style.border = "inset";
    board.insertAdjacentElement("beforeend", square);
}
};

populateBoard(16);

function changeSize(input) {
    populateBoard(input);
    let demo = document.querySelector('.demo');
    demo.insertAdjacentText(amount);
}

function colorSquare() {
    this.style.backgroundColor = color;
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => addEventListener("mouseover", colorSquare));
    
}

function changeColor (choice){
    color = choice;
}

function clearBoard() {
    let board = document.querySelector('.board');
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}