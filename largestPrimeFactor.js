// `13195` are `5`, `7`, `13` and `29`.
// Write an algorithm that finds the largest prime factor for the number `600851475143`.

const findPrimes = require('./findPrimes')

const findLargestPrimeFactor = num => {
  const primeFactors = []
  const primes = findPrimes(Math.sqrt(num))

  let i = 0
  let prime = primes[i]

  while (num > 1) {
    if (num % prime === 0) {
      primeFactors.push(prime)
      num /= prime
    } else {
      i += 1
      prime = primes[i]
    }
  }

  return primeFactors[primeFactors.length - 1]
}

const lpf = findLargestPrimeFactor(600851475143)
console.log(lpf);
