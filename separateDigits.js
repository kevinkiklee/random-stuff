const separateDigits = number => {
  const digits = []

  while (number > 10) {
    const lastDigit = Math.floor(number % 10)
    digits.push(lastDigit)
    number /= 10
  }

  digits.push(Math.ceil(number))
  return digits.reverse()
}

a = separateDigits(1234)
console.log({ a });
