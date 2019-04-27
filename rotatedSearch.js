const rotatedArraySearch = (inputArray, target, startIndex, endIndex) => {
  if (inputArray[startIndex] === target) {
    return true
  }

  if (startIndex - endIndex === 0) {
    return false
  }

  const currentIndex = Math.floor((endIndex - startIndex) / 2) + startIndex
  const currentEl = inputArray[currentIndex]
  const firstEl = inputArray[startIndex]
  const lastEl = inputArray[endIndex]

  let result

  if (target === currentEl) {
    result = true
  } else if (target > currentEl) {
    // If the target is greater than the current, search the right side
    // Except when the target is greater than the last el, then search left
    if (target > lastEl) {
      result = rotatedArraySearch(inputArray, target, startIndex, currentIndex)
    } else {
      result = rotatedArraySearch(inputArray, target, currentIndex + 1, endIndex)
    }
  } else {
    // If target is less than the current, search the left side
    // Except when the target is less than the first el, then search right
    if (target < firstEl) {
      result = rotatedArraySearch(inputArray, target, currentIndex + 1, endIndex)
    } else {
      result = rotatedArraySearch(inputArray, target, startIndex, currentIndex)
    }
  }

  return result
}

const input = [35, 46, 79, 102, 10, 14, 29, 31]
const startIndex = 0
const endIndex = input.length - 1

console.log({ 35: rotatedArraySearch(input, 35, startIndex, endIndex) === true })
console.log({ 79: rotatedArraySearch(input, 79, startIndex, endIndex) === true })
console.log({ 102: rotatedArraySearch(input, 102, startIndex, endIndex) === true })
console.log({ 10: rotatedArraySearch(input, 10, startIndex, endIndex) === true })
console.log({ 29: rotatedArraySearch(input, 29, startIndex, endIndex) === true })
console.log({ 31: rotatedArraySearch(input, 31, startIndex, endIndex) === true })
console.log({ 1: rotatedArraySearch(input, 1, startIndex, endIndex) === false })
console.log({ 100: rotatedArraySearch(input, 100, startIndex, endIndex) === false })
console.log({ 103: rotatedArraySearch(input, 103, startIndex, endIndex) === false })
console.log({ 1000: rotatedArraySearch(input, 1000, startIndex, endIndex) === false })
