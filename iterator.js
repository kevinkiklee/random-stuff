const flattenArray = nestedArray => {
  const flattened = []

  nestedArray.forEach(el => {
    if (Array.isArray(el)) {
      flattened.push(...flattenArray(el))
    } else {
      flattened.push(el)
    }
  })

  return flattened
}

class MyIterator {
  constructor(iterable) {
    this.iterable = iterable
    this.currentIndex = 0
  }

  next() {
    this.currentIndex += 1

    return {
      value: this.iterable[this.currentIndex - 1]
    }
  }

  hasNext() {
    return this.currentIndex < this.iterable.length
  }
}

const nestedInput = [
  1,
  [2, 3],
  [4, [5, 6]]
]

const flattenedInput = flattenArray(nestedInput)
const iter = new MyIterator(flattenedInput)

while (iter.hasNext()) {
  console.log({ value: iter.next().value, hasNext: iter.hasNext() })
}
