const findMaxValue = triangle => {
  for (let row = triangle.length - 2; row >= 0; row -= 1) {
    const rowCurrent = triangle[row]
    const rowBelow = triangle[row + 1]

    for (let col = 0; col < rowCurrent.length; col += 1) {
      const currentNum = rowCurrent[col]
      const firstAdj = rowBelow[col]
      const secondAdj = rowBelow[col + 1]

      triangle[row][col] = currentNum + Math.max(firstAdj, secondAdj)
    }
  }

  return triangle[0][0]
}

// const findMemoizedMaxValue = triangle => {
//   if (triangle.length === 1) {
//     return triangle[0][0]
//   }

//   const sourceRow = triangle.pop()
//   const targetRow = triangle.pop()

//   const newRow = targetRow.map((num, col) => {
//     const firstAdj = sourceRow[col]
//     const secondAdj = sourceRow[col + 1]

//     return num + (firstAdj > secondAdj ? firstAdj : secondAdj)
//   })

//   triangle.push(newRow)

//   return findMemoizedMaxValue(triangle)
// }

const findMemoizedMaxValue = triangle => {
  const [row] = triangle

  if (row.length === 1) {
    return triangle[0]
  }




}

require('fs').readFile('/Users/klee8/Workspace/random-code/random/trianglePath1.txt', 'utf8', (err, input) => {
  const triangle = input.split('\n').filter(Boolean).map(row => row.split(' ').map(num => parseInt(num, 10)))
  const maxTabulatedPathValue = findTabulatedMaxValue(triangle)
  const memoizedMaxValue = findMemoizedMaxValue(triangle.reverse())

  console.log({ maxTabulatedPathValue, memoizedMaxValue });
})
