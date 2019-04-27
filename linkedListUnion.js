class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }

  add(value) {
    this.next = new Node(value)
    return this.next
  }

  print() {
    const values = []
    let current = this

    while(current) {
      values.push(current.value)
      current = current.next
    }

    console.log({ values: values.filter(Boolean).join(' -> ')})
  }
}

const isIntersection = (nodeA, nodeB) => nodeA.value === nodeB.value
const isUnion = (nodeA, nodeB) => !isIntersection(nodeA, nodeB)

const buildList = set => {
  const head = new Node()
  let list = head
  set.forEach(value => list = list.add(value))
  return head
}

const buildSet = (nodeA, nodeB, isMatching) => {
  const set = new Set()

  let currentA = nodeA.next
  while (currentA) {
    let currentB = nodeB.next
    while (currentB) {
      if (isMatching(currentA, currentB)) {
        set.add(currentA.value).add(currentB.value)
      }
      currentB = currentB.next
    }
    currentA = currentA.next
  }

  return buildList(set)
}

const listA = new Node()
listA.add(10).add(15).add(4).add(20)

const listB = new Node()
listB.add(8).add(4).add(2).add(10)

listA.print()
listB.print()

const intersectionSet = buildSet(listA, listB, isIntersection)
intersectionSet.print()

const unionSet = buildSet(listA, listB, isUnion)
unionSet.print()
