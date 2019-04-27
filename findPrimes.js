// const runSieve = (candidateNums, currentPrimeIndex) => {
//   if (currentPrimeIndex >= candidateNums.length - 1) {
//     return candidateNums
//   }

//   const currentNum = candidateNums[currentPrimeIndex]

//   return runSieve(
//     candidateNums.filter(candidateNum =>
//       candidateNum === currentNum || candidateNum % currentNum !== 0
//     ),
//     currentPrimeIndex + 1,
//   )
// }

// const findPrimes = max => {
//   const candidateNums = [false, false]
// console.log('!!s');

//   for (let num = 2; num <= max; num += 1) {
//     candidateNums.push(true)
//   }

//   let currPrime = 2

//   while (currPrime < candidateNums.length) {
//     if (candidateNums[currPrime]) {
//       let candidateNumIndex = currPrime + 1

//       while (candidateNumIndex < candidateNums.length) {
//         if (candidateNumIndex % currPrime === 0) {
//           candidateNums[candidateNumIndex] = false
//         }

//         candidateNumIndex += 1
//       }
//     }

//     currPrime += 1
//   }

//   console.log(candidateNums);

//   const primes = []

//   for (let i = 0; i < candidateNums.length; i += 1) {
//     if (candidateNums[i]) {
//       primes.push(i)
//     }
//   }

//   console.log(primes);
//   return primes
// }

const findPrimes = n => {

// Eratosthenes algorithm to find all primes under n
var array = [], upperLimit = Math.sqrt(n), output = [];

// Make an array from 2 to (n - 1)
for (var i = 0; i < n; i++) {
    array.push(true);
}

// Remove multiples of primes starting from 2, 3, 5,...
for (var i = 2; i <= upperLimit; i++) {
    if (array[i]) {
        for (var j = i * i; j < n; j += i) {
            array[j] = false;
        }
    }
}

// All array[i] set to true are primes
for (var i = 2; i < n; i++) {
    if(array[i]) {
        output.push(i);
    }
}

return output;
}


console.log(findPrimes(771514));

module.exports = findPrimes
