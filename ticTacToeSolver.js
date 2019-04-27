const checkRows = board => {
  const mappedBoard = board.map(row => {
    const currentWinner = row[0]
    return row.every(cell => cell === currentWinner) && currentWinner
  })

  return mappedBoard.filter(Boolean)[0]
}

const checkDiagonal = board => {
  const leftTopDiagonal = []
  const rightTopDiagonal = []

  for (let leftTopRow = 0; leftTopRow < board.length; leftTopRow += 1) {
    for (let leftTopCol = 0; leftTopCol < board.length; leftTopCol += 1) {
      if (leftTopRow === leftTopCol) {
        leftTopDiagonal.push(board[leftTopRow][leftTopCol])
      }
    }
  }

  for (let rightTopRow = board.length - 1; rightTopRow >= 0; rightTopRow -= 1) {
    for (let rightTopCol = 0; rightTopCol < board.length; rightTopCol += 1) {
      if (rightTopRow + rightTopCol === 2) {
        rightTopDiagonal.push(board[rightTopRow][rightTopCol])
      }
    }
  }

  return checkRows([leftTopDiagonal, rightTopDiagonal])
}

const rotateBoard = board => {
  const rotatedBoard = new Array(3).fill().map(_ => new Array(3))

  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      rotatedBoard[col][row] = board[row][col]
    }
  }

  return rotatedBoard
}

const findWinner = board => {
  return checkRows(board) || checkRows(rotateBoard(board)) || checkDiagonal(board)
}

const board = [
  [2, 2, 1],
  [2, 2, 0],
  [1, 1, 2],
]

const winner = findWinner(board)
console.log(winner)
