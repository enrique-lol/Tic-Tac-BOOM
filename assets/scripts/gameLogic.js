const api = require('./api')
const ui = require('./ui')

let turnCount = 1;
let gameActive = 0;

let gameState = ['', '', '', '', '', '', '', '', '',]
const winningStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const winMess = function () {
  if (turnCount = 1) {
  $('.game_container h1').text("X wins!")
} else {$('.game_container h1').text("O wins!")}

gameActive = 0
}

const drawMess = function () {
  if (turnCount == 1 || 2) {
    $('.game_container h1').text("Everyone loses.")
  }

gameActive = 0
}



const cells = document.querySelectorAll('#box')
const newGame = document.querySelectorAll('.actualPlayButton')

const cellSelect = function (event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (turnCount === 1) {
    event.target.classList.add('X');
    api.updateGame()
    turnCount = 2;
  } else {
    event.target.classList.add('O');
    api.updateGame()
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
  turnCount = 1
  gameEnable()

  api.startGame()
}

function winCheck (event) {
  let gameWin = false;

  for (let i = 0; i <=  7; i++) {
    const winCon = winningStates[i]
    let a = gameState[winCon[0]]
    let b = gameState[winCon[1]]
    let c = gameState[winCon[2]]

    if ( a === '' || b === '' || c === '') {
      continue
    }
    if (a === b && b === c) {
      gameWin = true;
      break;
    }
  }

  if (gameWin) {
    winMess()
  }
}

module.exports = {
  startGame,
  cellSelect,
  resetGame,
  gameEnable,
  winCheck
}
