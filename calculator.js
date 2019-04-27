/*
  Calculator

  Given an arithmetic equation string consisting only of positive integers, `+`, `-`, `*` and `/` (no parentheses), compute the result down 3 decimal places with no rounding.  (CTCI 16.26)

  calculate('1+1') === 2
  calculate(' 4 *2') === 8
  calculate('2 + 3 * 5') === 17
  calculate('1+2*3-4/2') === 5
  calculate('1/8') === 0.125
  calculate('1/12') === 0.833
  calculate('1+2*3/4+5*6/7') === 6.785
*/

const digit = /\d/
const operators = /(\+|-|\*|\/)/
const addSubOps = /(\+|-)/
const multDivOps = /(\*|\/)/

const tokenize = equation => {
  const tokens = []
  const chars = equation.split('');

  let i = 0

  while (i < chars.length) {
    const char = chars[i]

    if (char.match(digit)) {
      let number = char

      let j = i + 1
      let nextChar = chars[j]

      while (nextChar && nextChar.match(digit)) {
        number += nextChar
        nextChar = chars[j += 1]
      }

      tokens.push({
        type: 'Number',
        value: number,
      })

      i += number.length - 1
    } else if (char.match(operators)) {
      tokens.push({
        type: 'Operator',
        value: char,
      })
    }

    i += 1
  }

  return tokens
}

const createOpNode = ({ op, left, right }) => ({
  type: 'Node', op, left, right,
})

const parseTokens = nodes => {
  while (nodes.length > 1) {
    let node
    let i = 0
    let token = nodes[i]

    while (token.type !== 'Operator') {
      token = nodes[i += 1]
    }

    const nodeOptions = { op: token.value }

    if (token.value.match(addSubOps)) {
      if (nodes[i - 1].type === 'Node') {
        const opNode = nodes[i - 1]
        nodeOptions.left = opNode
      } else {
        nodeOptions.left = nodes[i - 1]
      }
      nodeOptions.right = nodes[i + 1]
      node = createOpNode(nodeOptions)
    } else if (token.value.match(multDivOps)) {
      if (nodes[i - 1].type === 'Node') {
        const opNode = nodes[i - 1]
        nodeOptions.left = opNode.right
        nodeOptions.right = nodes[i + 1]
        node = createOpNode(nodeOptions)
        opNode.right = node
        node = opNode
      } else {
        nodeOptions.left = nodes[i - 1]
        nodeOptions.right = nodes[i + 1]
        node = createOpNode(nodeOptions)
      }
    }

    nodes = nodes.slice(3)
    nodes.unshift(node)
  }

  return nodes[0]
}

const calculateOp = ({ op, left, right }) => {
  left = parseFloat(left, 10)
  right = parseFloat(right, 10)
  let result

  if (op === '+') {
    result = left + right
  } else if (op === '-') {
    result = left - right
  } else if (op === '*') {
    result = left * right
  } else if (op === '/') {
    result = left / right
  }

  return result
}

const traverseAst = node => {
  if (!node.left && !node.right) {
    return [node]
  }

  const left = node.left && traverseAst(node.left)
  const right = node.right && traverseAst(node.right)

  return calculateOp({
    op: node.op,
    left: typeof left === 'object' ? left[0].value : left,
    right: typeof right === 'object' ? right[0].value : right,
  })
}

const calculate = equation => {
  const tokens = tokenize(equation)
  const ast = parseTokens(tokens)
  const result = traverseAst(ast)

  console.log({ result });
  return result
}

console.log(calculate('1 + 2') === 1 + 2) // 2
console.log(calculate('1+2+3') === 1 + 2 + 3) // 2
console.log(calculate(' 4 *2') === 4 * 2) // 8
console.log(calculate('20+30*5-1') === 20 + 30 * 5 - 1) // 169
console.log(calculate('1+2*3-4/2') === 1 + 2 * 3 - 4 / 2) // 5
console.log(calculate('1/8') === 1 / 8) // 0.125
console.log(calculate('1/12') === 1 / 12) // ~0.0833
console.log(calculate('1+2*3/4+5*6/7') === 1 + 2 * 3 / 4 + 5 * 6 / 7) // ~6.785
