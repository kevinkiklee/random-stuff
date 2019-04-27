
// *[Daily Temperatures]* // 637
// _(Thought about it a little bit but I have no idea)_

// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`,
// your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.
// [3, 2, 1, 4]
// [3, 2, 1, 0]

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].


// ~1 minute
const findLargestOfFour = quartets => quartets.map(quartet => Math.max(...quartet))

// 9 minutes
const findNextWarmerDay = temperatures => {
  const warmerDaysUntil = new Array(temperatures.length)

  let i = 0
  let j = 1

  while (i <= temperatures.length - 1) {
    while (j <= temperatures.length - 1) {
      if (j === temperatures.length - 1) {
        warmerDaysUntil[i] = 0
        break
      }
      if (temperatures[i] < temperatures[j]) {
        warmerDaysUntil[i] = j - i
        break
      }
      j += 1
    }
    i += 1
  }

  return warmerDaysUntil
}

// const result = findNextWarmerDay([73, 74, 75, 71, 69, 72, 76, 73])
// console.log({ result });
// 857
const openParens = ['(', '{', '[']
const closeParens = [')', '}', ']']

const parensMap = {
  '(': ')',
  '[': ']',
  '{': '}',
}

// const isValidParen = parens => {
//   const openParens = Object.keys(parensMap)
//   const parenStack = []

//   for (let i = 0; i < parens.length; i += 1) {
//     const currentParen = parens[i]
//     if (openParens.includes(currentParen)) {
//       parenStack.push(currentParen)
//     } else {
//       const stackTop = parenStack.pop()
//       const matchingPair = parensMap[stackTop]

//       if (matchingPair !== currentParen) {
//         return false
//       }
//     }
//   }

//   return parenStack.length === 0
// }
// 737

const isValidParen = parens => {
  let openParenCount = 0

  for (let i = 0; i < parens.length; i += 1) {
    if (parens[i] === '(') {
      openParenCount += 1
    } else if (openParenCount === 0) {
      return false
    } else {
      openParenCount -= 1
    }
  }

  return openParenCount === 0
}

const result1 = isValidParen('(())')
const result2 = isValidParen('(()')
const result3 = isValidParen('()()')
const result4 = isValidParen(')(()')

console.log({result1});
console.log({result2});
console.log({result3});
