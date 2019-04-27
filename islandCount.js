const grid = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
]

// grid
// grid
// grid
// grid

const markNeighbors = (rowIndex, colIndex, grid) => {
  // Check boundaries
  [
    [rowIndex + 1][colIndex],
    [rowIndex - 1][colIndex],
    [rowIndex][colIndex - 1],
    [rowIndex][colIndex + 1],
  ].forEach(([newRowIndex, newColIndex]) => {
    if (grid[newRowIndex, newColIndex]) {
      markNeighbors(newRowIndex, newColIndex)
    }
  })
}

const findNumberOfIslands = grid => {
  let islandCount = 0

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell) {
        islandCount += 1
        grid[rowIndex][colIndex] = 0
        markNeighbors(rowIndex, colIndex, grid)
      }
    })
  })

  return islandCount
}

const numberOfIslands = findNumberOfIslands(grid)
console.log({ numberOfIslands });
