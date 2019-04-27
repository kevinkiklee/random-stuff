class Queue {
  constructor() {
    this.store = []
  }

  enqueue(el) {
    return this.store.push(el)
  }

  dequeue() {
    return this.isNotEmpty() && this.store.shift()
  }

  peek() {
    return this.store[0]
  }
c
  toString() {
    return this.store.toString()
  }

  isNotEmpty() {
    return this.store.length > 0
  }
}

class QueueStack {
  constructor() {
    this.store = new Queue()
  }

  push(el) {
    const newQueue = new Queue()

    newQueue.enqueue(el)

    while (this.store.isNotEmpty()) {
      const storedEl = this.store.dequeue()
      newQueue.enqueue(storedEl)
    }

    this.store = newQueue
  }

  pop() {
    return this.store.dequeue()
  }

  peek() {
    return this.store.peek()
  }
}

const queueStack = new QueueStack();

queueStack.push(1);
queueStack.push(2);
queueStack.push(3);
queueStack.push(4);

const peek = queueStack.peek();
console.log({ peek });

const three = queueStack.pop();
const two = queueStack.pop();
const one = queueStack.pop();

console.log(three);
console.log(two);
console.log(one);
