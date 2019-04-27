const sortDigits = number => {
  const digitCount = (new Array(10)).fill(0)

  while (number > 1) {
    const digit = Math.floor(number % 10)
    digitCount[digit] += 1
    number /= 10
  }

  let sortedNumber = 0
  let multiplier = 1
  let digit = 10

  while (digit > 0) {
    let count = digitCount[digit]

    while (count > 0) {
      sortedNumber += digit * multiplier
      multiplier *= 10
      count -= 1
    }

    digit -= 1
  }

  return sortedNumber
}

console.log({ 8970: sortDigits(8970) === 789 })
console.log({ 32445: sortDigits(32445) === 23445 })
console.log({ 10101: sortDigits(10101) === 111 })
