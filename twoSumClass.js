class TwoSum {
  constructor(nums = []) {
    this.store = nums
  }

  add(num) {
    this.store.push(num)
    return this
  }

  find(inputNum) {
    const oppNums = {}

    return this.store.filter(num => {
      if (oppNums[num]) {
        return true
      }
      oppNums[inputNum - num] = true
    }).length > 0
  }
}

const twoSum1 = new TwoSum()
twoSum1.add(3).add(1).add(5)
const four = twoSum1.find(4)
const seven = twoSum1.find(7)


const twoSum2 = new TwoSum([3, 1, 2])
const three = twoSum2.find(3)
const six = twoSum2.find(6)

console.log({ four, seven, three, six })
