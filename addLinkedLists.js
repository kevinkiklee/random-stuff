class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  add(data){
    let newNode = new Node(data)

    if(this.head === null) {
      return this.head = newNode
    }
    let current = this.head;
    while(current.next) {
      current = current.next
    }
    current.next = newNode
  }
}
//just trying to get the sum on one LL at this moment
function addTwo(llA){
  var sum = 0;
  var currentNode = llA.head

  while(currentNode.next) {
    sum += currentNode.data
    currentNode = currentNode.next
  }

  return sum
}


var listA = new LinkedList()
listA.add(2)
listA.add(4)
listA.add(5)
console.log(listA)
// var listB = new LinkedList();
// listB.add(5)
// listB.add(6)
// listB.add(4)
// console.log(listB);
addTwo(listA)
