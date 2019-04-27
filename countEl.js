const findIndex = (inputArray, el, startIndex, endIndex, searchLeft) => {
  if (startIndex > endIndex) {
    return -1
  }

  const mid = Math.floor((endIndex - startIndex) / 2) + startIndex
  const currentEl = inputArray[mid]
  const prevEl = inputArray[mid - 1]
  const nextEl = inputArray[mid + 1]

  const isFirstOccurance = currentEl === el && searchLeft && prevEl !== el
  const isLastOccurance = currentEl === el && !searchLeft && nextEl !== el

  let index

  if (isFirstOccurance || isLastOccurance ) {
    index = mid
  } else if (currentEl > el || searchLeft) {
    index = findIndex(inputArray, el, startIndex, mid - 1, searchLeft)
  } else if (currentEl < el || !searchLeft) {
    index = findIndex(inputArray, el, mid + 1, endIndex, searchLeft)
  }

  return index
}

const countEl = (inputArray, el) => {
  const leftIndex = findIndex(inputArray, el, 0, inputArray.length - 1, true)
  const rightIndex = findIndex(inputArray, el, 0, inputArray.length - 1, false)

  if (leftIndex < 0 || rightIndex < 0) {
    return 0
  }

  return rightIndex - leftIndex + 1
}

const input = [1, 2, 3, 3, 4, 5]
const count = countEl(input, 3)

console.log({ count })
console.log({ hasPassed: count === 2 })
