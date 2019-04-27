// let max = 0

// const quickSort = (inputArray, startIndex, endIndex) => {
//   // console.log({startIndex});
//   // console.log({endIndex});
//   if (endIndex === startIndex) {
//     return [inputArray[startIndex]]
//   }

//   const pivotIndex = Math.floor((endIndex - startIndex) / 2) + startIndex
//   const pivotEl = inputArray[pivotIndex]

//   let currentIndex = startIndex

//   while (currentIndex < endIndex) {
//     let i = startIndex
//     let j = startIndex

//     while (j < endIndex) {
//       if (currentIndex !== pivotIndex) {
//         console.log(pivotEl);
//         const currentEl = inputArray[currentIndex]
//         console.log({currentEl});

//         if (currentEl > pivotEl) {
//           const temp = inputArray[i]
//           inputArray[j] = inputArray[i]
//           inputArray[i] = temp
//           i += 1
//         }
//       }

//       j += 1
//     }

//     console.log(inputArray);
//     // if (currentIndex !== pivotIndex) {
//     //   const currentEl = inputArray[currentIndex]

//     //   if (currentEl < pivotEl) {
//     //     left.push(currentEl)
//     //   } else {
//     //     right.push(currentEl)
//     //   }
//     // }

//     currentIndex += 1
//   }

//   max += 1

//   if (max > 30) {
//     return
//   }

//   return quickSort(inputArray, startIndex, pivotIndex)
//     .concat([pivotEl])
//     .concat(quickSort(inputArray, pivotIndex + 1, endIndex))
// }

const quickSort = inputArray => {
  const left = []
  const right = []

  if (inputArray.length <= 1) {
    return inputArray
  }

  const pivotIndex = Math.floor(inputArray.length / 2)
  const pivotEl = inputArray[pivotIndex]

  let i = 0

  while (i < inputArray.length) {
    if (i !== pivotIndex) {
      const currentEl = inputArray[i]

      if (currentEl < pivotEl) {
        left.push(currentEl)
      } else {
        right.push(currentEl)
      }
    }

    i += 1
  }

  return quickSort(left).concat([pivotEl]).concat(quickSort(right))
}

const input = [4, 15, 2, 1, 7, 7, 15, 13, 5, 3, 6]

console.log(quickSort(input))
