// Input: S = "5F3Z-2e-9-w", K = 4
// Output: "5F3Z-2E9W"

// Input: S = "2-5g-3-J", K = 2
// Output: "2-5G-3J"
// let formattedKey = ''

// const a = rawKey.replace(/-/g, '')
// console.log(a);
// a.split('').forEach((char, i) => {
//   formattedKey += char.toUpperCase()

//   if ((i + 1) % interval === 0) {
//     formattedKey += '-'
//   }
// })

// return formattedKey

const formatKey = (rawKey, interval) => {
  const strippedKey = rawKey.replace(/-/g, '').split('')

  let formattedKey = ''
  strippedKey.forEach((char, i) => {
    formattedKey += char.toUpperCase()

    if ((i + 1) % interval === 0 && i !== strippedKey.length - 1) {
      formattedKey += '-'
    }
  })

  return formattedKey
}

const result1 = formatKey('5F3Z-2e-9-w', 4)
const result2 = formatKey('2-5g-3-J', 2)

console.log({ result1 });
console.log({ result2 });
