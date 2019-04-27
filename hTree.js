const DIVISOR = Math.sqrt(2)

const drawLine = (x1, x2, y1, y2) => {
  console.log({
    x1, x2, y1, y2,
  })
}

const drawHTree = (x, y, length, depth) => {
  if (depth === 0) {
    return
  }

  const centerLine = {
    x1: x - 1,
    x2: x + 1,
    y1: y,
    y2: y,
  }

  const leftLine = {
    x1: centerLine.x1,
    x2: centerLine.x1,
    y1: centerLine.y1 + 1,
    y2: centerLine.y1 - 1,
  }

  const rightLine = {
    x1: centerLine.x2,
    x2: centerLine.x2,
    y1: centerLine.y2 + 1,
    y2: centerLine.y2 - 1,
  }

  const lines = [centerLine, leftLine, rightLine]

  lines.forEach(({ x1, x2, y1, y2 }) => drawLine(x1, x2, y1, y2))

  const newCenters = [
    [leftLine.x1, leftLine.y1],
    [leftLine.x2, leftLine.y2],
    [rightLine.x1, rightLine.y1],
    [rightLine.x2, rightLine.y2],
  ]

  newCenters.forEach(([newX, newY]) => drawHTree(newX, newY, length / DIVISOR, depth - 1))
}

drawHTree(0, 0, 2, 2)
