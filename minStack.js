class MinStack {
  constructor() {
    this.store = []
    this.minStore = []
  }

  push(el) {
    this.store.push(el)

    const lastMin = this.minStore[this.minStore.length - 1] || el

    if (el < lastMin) {
      this.minStore.push(el)
    } else {
      this.minStore.push(lastMin)
    }
  }

  pop() {
    if (this.store.length === 0) {
      return
    }

    this.minStore.pop()
    return this.store.pop()
  }

  peek() {
    return this.store[this.store.length - 1]
  }

  findMin() {
    return this.minStore[this.minStore.length - 1]
  }

  toString() {
    return `store = [${this.store.toString()}]\nminStore = [${this.minStore.toString()}]`
  }
}

const minStack = new MinStack()

minStack.push(6)
minStack.push(5)
minStack.push(7)
minStack.push(1)
minStack.push(2)
console.log(minStack.toString())

const minFirst = minStack.findMin()
console.log(minFirst) // 1

minStack.pop()
console.log(minStack.toString())

minStack.pop()
console.log(minStack.toString())

const minSecond = minStack.findMin()
console.log(minSecond) // 5
