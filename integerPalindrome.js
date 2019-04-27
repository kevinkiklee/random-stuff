/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = n => {
  if (n <= 10) {
    return (n - 1).toString()
  }

  const nums = n.split('')
  const isEven = nums.length % 2 === 0
  let mid = Math.floor(nums.length / 2)
  let palindrome = nums.slice(0, mid)

  if (isEven) {
    mid -= 1
    palindrome = nums.slice(0, mid + 1)
  }

  let i = mid

  while (i >= 0) {
    palindrome.push(nums[i])
    i -= 1
  }

  return palindrome.join('')
}

const a = nearestPalindromic('1213') // 1221
const b = nearestPalindromic('12131') // 12121
console.log(a);
console.log(b);
