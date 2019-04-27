//jshint esnext:true

/*
*=== Tuesday Feb 12th 2019 - Daily Programmer ===*
[Union and Intersection of Two Linked Lists]
Given two Linked Lists, create union and intersection lists that contain union and intersection of the elements present in the given lists. Order of elments in output lists doesn’t matter.

Example:
Input:
  List1: 10->15->4->20
  List2:  8->4->2->10
Output:
  Intersection List: 4->10
  Union List: 2->8->20->4->15->10
*/

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  each(callback) {
    let nextNode = this.head;

    while (nextNode) {
      callback(nextNode);
      nextNode = nextNode.next;
    }
  }

  getTail() {
    let nextNode;

    this.each((node) => {
      nextNode = node;
    });

    return nextNode;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.getTail().next = node;
    }

    this.length += 1;
  }

  find(value) {
    let nextNode = null;

    this.each((node) => {
      if (node.value === value) {
        nextNode = node;
      }
    });

    return nextNode;
  }

  getValues() {
    const values = [];
    this.each((node) => values.push(node.value));

    return values;
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const getIntersections = (listOne, listTwo) => {
  const intersects = [];

  listOne.each((node) => {
    if (listTwo.find(node.value)) {
      intersects.push(node.value);
    }
  });

  return intersects;
};

const getUnion = (listOne, listTwo) => {
  const union = [...listOne.getValues()];

  listTwo.each((node) => {
    if (!listOne.find(node.value)) {
      union.push(node.value);
    }
  });

  return union;
};

const listOne = new LinkedList();
const listTwo = new LinkedList();

listOne.add(10);
listOne.add(15);
listOne.add(4);
listOne.add(20);

listTwo.add(8);
listTwo.add(4);
listTwo.add(2);
listTwo.add(10);

console.log('4->10 ===', getIntersections(listOne, listTwo));
console.log('2->8->20->4->15->10 ===', getUnion(listOne, listTwo));
