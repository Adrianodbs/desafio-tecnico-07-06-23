const width = 10
const height = 10
let board = []

function initializeBoard() {
  board = []

  for (let row = 0; row < height; row++) {
    const newRow = []

    for (let col = 0; col < width; col++) {
      newRow.push(0)
    }

    board.push(newRow)
  }
}

function renderBoard() {
  const boardElement = document.getElementById('board')
  boardElement.innerHTML = ''

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      const cell = document.createElement('div')
      cell.className = 'cell'

      if (board[row][col] === 1) {
        cell.classList.add('alive')
      }

      cell.addEventListener('click', function () {
        toggleCell(row, col)
      })

      boardElement.appendChild(cell)
    }
  }
}

function toggleCell(row, col) {
  if (board[row][col] === 1) {
    board[row][col] = 0
  } else {
    board[row][col] = 1
  }

  renderBoard()
}

function getCellNeighbors(row, col) {
  const neighbors = []

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) {
        continue
      }

      const neighborRow = row + i
      const neighborCol = col + j

      if (
        neighborRow >= 0 &&
        neighborRow < height &&
        neighborCol >= 0 &&
        neighborCol < width
      ) {
        const neighborCell = board[neighborRow][neighborCol]
        neighbors.push(neighborCell)
      }
    }
  }

  return neighbors
}

function calculateNextGeneration() {
  const newBoard = []

  for (let row = 0; row < height; row++) {
    newBoard[row] = []

    for (let col = 0; col < width; col++) {
      const cell = board[row][col]
      const liveNeighbors = getCellNeighbors(row, col).reduce(
        (acc, val) => acc + val,
        0
      )

      if (cell === 1) {
        if (liveNeighbors === 2 || liveNeighbors === 3) {
          newBoard[row][col] = 1
        } else {
          newBoard[row][col] = 0
        }
      } else {
        if (liveNeighbors === 3) {
          newBoard[row][col] = 1
        } else {
          newBoard[row][col] = 0
        }
      }
    }
  }

  board = newBoard
  renderBoard()
}

initializeBoard()
renderBoard()

const nextButton = document.createElement('button')
nextButton.textContent = 'Próxima Geração'
nextButton.className = 'button'
nextButton.addEventListener('click', calculateNextGeneration)
document.body.appendChild(nextButton)
