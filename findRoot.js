// input:  x = 7, n = 3
// output: 1.913

// input:  x = 9, n = 2
// output: 3

const findRoot = (number, base) => {
  let estimate = number / base
  let result = 1

  for (let i = 0; i < base; i += 1) {
    result *= estimate
  }

  if (result)
}

const number = 7
const base = 3

const result = findRoot(number, base)
console.log({ result });
// 23280666745373
