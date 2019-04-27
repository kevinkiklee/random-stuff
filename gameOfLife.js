// Input:
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

const coords = [[0, -1], [1, -1], [1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1]]

const gameOfLife = board => {
  const rowLength = board.length
  const colLength = board[0].length
  const newBoard = Array.from(Array(rowLength), () => Array(colLength))

  for (let row = 0; row < rowLength; row += 1) {
    for (let col = 0; col < colLength; col += 1) {
      let currentState = board[row][col]
      let liveNeighborCount = 0

      coords.forEach(([rowShift, colShift]) => {
        rowShift += row
        colShift += col
        if (rowShift >= 0 && colShift >= 0 && rowShift <= rowLength - 1 && colShift <= colLength - 1) {
          liveNeighborCount += board[rowShift][colShift]
        }
      })

      if (currentState && (liveNeighborCount < 2 || liveNeighborCount > 3)) {
        currentState = 0
      } else if (!currentState && liveNeighborCount === 3) {
        currentState = 1
      }

      newBoard[row][col] = currentState
    }
  }

  return newBoard
};

const input = [
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]

const nextState = gameOfLife(input)
console.log({ nextState });
