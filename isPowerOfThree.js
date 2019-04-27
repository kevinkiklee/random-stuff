/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = num => {
  let count = 0

  while (num % 3 === 0) {
    count += 1
    num /= 3
  }
  console.log({ count });
  return count === 3
};

const result = isPowerOfThree(64)
console.log({ result });
