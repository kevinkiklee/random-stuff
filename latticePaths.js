// There are two ways to solve this problem:
// 1) Dynamic Programming
// 2) Combinatorics
// This solution looks at DP

const calculateLatticePaths = gridSize => {
  const grid = Array(gridSize + 1).fill(Array(gridSize + 1).fill(0))

  for (let k = 0; k < gridSize; k += 1) {
    grid[k][gridSize] = 1;
    grid[gridSize][k] = 1;
  }

  for (let i = gridSize - 1; i >= 0; i -= 1) {
    for (let j = gridSize - 1; j >= 0; j -= 1) {
      grid[i][j] = grid[i + 1][j] + grid[i][j + 1]
    }
  }

  return grid[0][0]
}

console.log({ 2: calculateLatticePaths(2) })
console.log({ 3: calculateLatticePaths(3) })
console.log({ 4: calculateLatticePaths(4) })
console.log({ 5: calculateLatticePaths(5) })
console.log({ 6: calculateLatticePaths(6) })
console.log({ 7: calculateLatticePaths(7) })
console.log({ 8: calculateLatticePaths(8) })
console.log({ 9: calculateLatticePaths(9) })
console.log({ 10: calculateLatticePaths(10) })
console.log({ 20: calculateLatticePaths(20) })
