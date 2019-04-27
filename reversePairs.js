/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = nums => {
  const pairs = {}

  let i = 0
  while (i < nums.length) {
    let j = i + 1
    while (j < nums.length) {
      if (nums[i] > 2 * nums[j]) {
        if (pairs[`${i}${j}`]) {
          pairs[`${i}${j}`] = true
        }
        pairs[`${j}${i}`] = true
      }
      j += 1
    }

    console.log(pairs);
    i += 1
  }

  return Object.keys(pairs).length
};

const a = reversePairs([1, 3, 2, 3, 1])
console.log(a);
