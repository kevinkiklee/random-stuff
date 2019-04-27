class Node {
  constructor({ value, left, right }) {
    this.value = value
    this.left = left
    this.right = right
  }
}

const levelTraversal = node => {
  let nodeQueue = [node]

  while (nodeQueue.filter(Boolean).length > 0) {
    const currentNode = nodeQueue.shift()
    nodeQueue = [...nodeQueue, currentNode.left, currentNode.right]
    console.log(currentNode.value)
  }
}

const root = new Node({
  value: 1,
  left: new Node({
    value: 2,
    left: new Node({
      value: 4,
    }),
    right: new Node({
      value: 5,
    }),
  }),
  right: new Node({
    value: 3,
    left: new Node({
      value: 6,
    }),
    right: new Node({
      value: 7,
    }),
  }),
})

levelTraversal(root)
