class BracketStack {
  constructor() {
    this.store = []
  }

  push(value) {
    return this.store.push(value)
  }

  pop() {
    return this.store.pop()
  }

  peek() {
    return this.store[this.store.length - 1]
  }

  length() {
    return this.store.length
  }

  setValidBracket([opened, closed]) {
    this.bracketsMap[opened] = closed
  }
}

// const bracketsMap = {
//   '(': ')',
//   '[': ']',
//   '<': '>'
// }

// const openBrackets = Object.keys(bracketsMap)

const areBracketsBalanced1 = brackets => {
  const bracketStack = new BracketStack()

  brackets.split('').forEach(bracket => {
    if (openBrackets.includes(bracket)) {
      bracketStack.push(bracket)
    } else {
      const lastBracket = bracketStack.peek()
      const matchingPair = bracketsMap[lastBracket]

      if (matchingPair === bracket) {
        bracketStack.pop()
      }
    }
  })

  return bracketStack.length() === 0
}

    // if (bracket === '(') {
    //   count += 1
    // } else if (count !== 0) {
    //     count -= 1
    // }

const areBracketsBalanced = brackets =>
  brackets.split('').reduce((count, bracket) =>
    bracket === '('
      ? count += 1
      : count !== 0
      ? count -= 1
      : count, 0) === 0

const result1 = areBracketsBalanced('(())')
const result2 = areBracketsBalanced('(()')
const result3 = areBracketsBalanced('()()')
const result4 = areBracketsBalanced('()(())')
const result5 = areBracketsBalanced('()(()')
const result6 = areBracketsBalanced(')(()')

console.log({ result1, result2, result3, result4, result5, result6 });
