const api = require('./api')
const ui = require('./ui')

let newBoard = {} // newBoard should be referenced to clean the board
let turnCount = 1;
let gameActive = 0;

const cells = document.querySelectorAll('#box')
const newGame = document.querySelectorAll('.actualPlayButton')

const cellSelect = function (event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (turnCount === 1) {
    event.target.classList.add('X');
    turnCount = 2;
  } else {
    event.target.classList.add('O');
    turnCount = 1;
  }

  if (event.target.classList === "X" || "O") {
    event.target.removeEventListener('click', cellSelect);
  }
}

function gameEnable () {
  for (const cell of cells) {
    if (gameActive === 1) {
    cell.addEventListener('click', cellSelect)
    } else cell.removeEventListener('click', cellSelect)
  }
}

// Game Function

function startGame () {
  if (gameActive === 0) {
  console.log('Begin the battle')
  console.log(cells);
  console.log(newGame);

  api.startGame()
  .then(ui.startGame)
  .catch(ui.onFailure)

  gameActive = 1
  gameEnable()
} else {
  if (gameActive === 1) {
    console.log('There is a game in progress');
    resetGame()
    }
  }
}

function resetGame (event) {
  const cells = document.querySelectorAll('#box')
  gameActive = 0

  console.log(cells);
  console.log('DESTROY THE BOARD');

  for (const cell of cells) {
  cell.classList.remove('X');
  cell.classList.remove('O');
}

  gameActive = 1
  gameEnable()

  api.startGame()
}

module.exports = {
  startGame,
  cellSelect,
  resetGame,
  gameEnable
}
