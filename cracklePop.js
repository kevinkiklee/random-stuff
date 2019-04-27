class Node {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }
}

const crackleLoop = new Node(null)
crackleLoop.next =
  (new Node(null,
    (new Node('Crackle', crackleLoop))))

const popLoop = new Node(null)
popLoop.next =
  (new Node(null, (
    new Node(null, (
      new Node(null, (
        new Node('Pop', popLoop))))))))

const printCracklePop = max => {
  let currentCrackle = crackleLoop
  let currentPop = popLoop

  for (let num = 1; num <= max; num++) {
    const cracklePopText = `${currentCrackle.value || ''}${currentPop.value || ''}`
    console.log(cracklePopText || num)

    currentCrackle= currentCrackle.next
    currentPop= currentPop.next
  }
}

printCracklePop(100)
