/*
  43 44 45 46 47 48 49
  42 21 22 23 24 25 26
  41 20  7  8  9 10 27
  40 19  6  1  2 11 28
  39 18  5  4  3 12 29
  38 17 16 15 14 13 30
  37 36 35 34 33 32 31

  Grid Length 1 => 1 Layer => 1 numbers in the array
  Grid Length 3 => 2 Layers => 8 numbers in the array
  Grid Length 5 => 3 Layers => 16 numbers in the array
  Grid Length 7 => 4 Layers => 24 numbers in the array
  Grid Length 9 => 5 Layers => 32 numbers in the array
  Grid Length 11 => 6 Layers => 40 numbers in the array
  Grid Length 13 => 7 Layers => 48 numbers in the array

  Bottom Right = Top Right + 1 + ((layerCount - 4) / 4)
  Bottom Left = Bottom Right + (layerCount / 4)
  Top Left = Bottom Left + (layerCount / 4)
  Top Right = Top Left + (layerCount / 4)
*/

const findDiagonalSum = gridLength => {
  let maxLayerLevel = (gridLength + 1) / 2
  let currentLevel = 2
  let sum = 1
  let lastNumInLayer = 1

  while (currentLevel <= maxLayerLevel) {
    const layerCount = 8 * (currentLevel - 1)
    const layerWidth = layerCount / 4

    const bottomRight = 1 + lastNumInLayer + ((layerCount - 4) / 4)
    const bottomLeft = bottomRight + layerWidth
    const topLeft = bottomLeft + layerWidth
    const topRight = topLeft + layerWidth

    sum += bottomRight + bottomLeft + topLeft + topRight
    lastNumInLayer = topRight

    currentLevel += 1
  }

  return sum
}

// const three = findDiagonalSum(3)
// const five = findDiagonalSum(5)
// const seven = findDiagonalSum(1001)
// const thousandOne = findDiagonalSum(999999999)

const inputs = [
  1001,
  10001,
  100001,
  1000001,
  10000001,
  100000001,
  1000000001,
  10000000001,
  100000000001,
]

inputs.forEach(gridLength => {
  const start = process.hrtime()
  findDiagonalSum(gridLength)
  const [seconds, nanoseconds] = process.hrtime(start)

  console.log(`For ${gridLength}: ${seconds}s ${nanoseconds / 1000000}ms`);
})




// console.log({ three  })
// console.log({ five })
// console.log({ seven })
// console.log({ thousandOne })

