const mergeArrays = (left, right) => {
  const mergedArray = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      mergedArray.push(left.shift())
    } else {
      mergedArray.push(right.shift())
    }
  }

  return mergedArray.concat(left).concat(right)
}

const mergeSort = inputArray => {
  if (inputArray.length === 1) {
    return inputArray
  }

  const mid = Math.floor(inputArray.length / 2)

  const left = mergeSort(inputArray.slice(0, mid))
  const right = mergeSort(inputArray.slice(mid))

  return mergeArrays(left, right)
}

const input = [4, 2, 1, 1, 7, 7, 13, 5, 3, 6]

console.log(mergeSort(input))
