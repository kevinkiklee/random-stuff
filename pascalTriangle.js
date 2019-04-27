// nput: 5
// Output:
// [
//   [1],
//   [1,1],
//   [1,2,1],
//   [1,3,3,1],
//   [1,4,6,4,1]
//    0 1 2 3 4
// ] 827 - 834


const makePascalsTriangle = numberOfRows => {
  if (numberOfRows === 1) {
    return [1]
  }

  const prevRow = makePascalsTriangle(numberOfRows - 1)
  const newRow = new Array(prevRow.length)
  newRow.push(1)

  prevRow.forEach((el, i) => {
    if (i === 0) {
      newRow[0] = 1
    } else {
      newRow[i] = el + prevRow[i - 1]
    }
  })

  return newRow
}

