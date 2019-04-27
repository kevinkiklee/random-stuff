// *[Kth Largest Element in a Stream]*

// Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Your KthLargest class will have a constructor which accepts an integer `k` and an integer array `nums`, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

// ```int k = 3;
// int[] arr = [4,5,8,2];
// KthLargest kthLargest = new KthLargest(3, arr);
// kthLargest.add(3);   // returns 4
// kthLargest.add(5);   // returns 5
// kthLargest.add(10);  // returns 5
// kthLargest.add(9);   // returns 8
// kthLargest.add(4);   // returns 8``` 841

// class KthLargest {
//   constructor(kValue, els) {
//     this.kValue = kValue
//     this.els = els
//     this.kthValue = 0
//   }

//   add(el) {
//     this.els.push(el)
//     this.els = this.els.sort((a, b) => b - a)
//     return this.els[this.kValue - 1]
//   }
// }
class KthLargest {
  constructor(kValue, els) {
    this.maxArray = []
    this.kValue = kValue
    els.forEach(el => this.add(el))
  }

  add(newEl) {
    const newMaxArray = []
    let inserted = false
    for (let i = 0; i < this.kValue - 1; i += 1) {
      if (newMaxArray.length === this.kValue) {
        break
      }

      const currentEl = this.maxArray[i]
debugger
      if (i === 0 && !currentEl) {
        this.maxArray = [newEl]
        return newEl
      } else if (newEl >= currentEl && !inserted) {
        newMaxArray.push(newEl)
        newMaxArray.push(currentEl)
        inserted = true
      } else if (!currentEl) {
        continue
      } else {
        newMaxArray.push(currentEl)
      }
    }

    this.maxArray = newMaxArray
    console.log({ newMaxArray})
    return newMaxArray[newMaxArray.length - 1]
  }


}
const input = [4, 5, 8, 2]
const instance = new KthLargest(3, input)
const result1 = instance.add(3)
console.log({ result1 });
const result2 = instance.add(5)
console.log({ result2 });
const result3 = instance.add(10)
console.log({ result3 });
