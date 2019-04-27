class Stack {
  constructor() {
    this.store = []
  }

  pop() {
    return this.store.pop()
  }

  push(value) {
    return this.store.push(value)
  }

  empty() {
    return this.store.length === 0
  }
}

class StackQueue {
  constructor() {
    this.store = new Stack()
  }

  enqueue(value) {
    this.store.push(value)
  }

  dequeue() {
    const tempStack = new Stack()

    while (!this.store.empty()) {
      tempStack.push(this.store.pop())
    }

    const value = tempStack.pop()

    while (!tempStack.empty()) {
      this.store.push(tempStack.pop())
    }

    return value
  }
}


// 3
// 2
// 1

const stackQueue = new StackQueue();

a = stackQueue.enqueue(1);
b = stackQueue.enqueue(2);
c = stackQueue.dequeue();   // returns 1
// stackQueue.empty(); // returns false

console.log({ a, b, c });
