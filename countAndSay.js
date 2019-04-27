// *[Count and Say]*

// The count-and-say sequence is the sequence of integers with the
// first five terms as following:

// ```1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221```
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// ```Input: 1
// Output: "1"

// Input: 4
// Output: "1211"```


const countAndSay = n => {
  if (n === 1) {
    return '1'
  }

  const prevSequence = countAndSay(n - 1)
  const numberChunks = []

  let i = 0

  while (i <= prevSequence.length - 1) {
    let currentMatch = prevSequence[i]
    let j = i + 1

    while (j <= prevSequence.length - 1) {
      if (prevSequence[i] === prevSequence[j]) {
        currentMatch += prevSequence[i]
        j += 1
      } else {
        break
      }
    }

    numberChunks.push(currentMatch)
    currentMatch = ''
    i = j
  }

  return numberChunks.map(chunk => `${chunk.length}${chunk[0]}`).join('')
}


a = countAndSay(5)

console.log({ a});
