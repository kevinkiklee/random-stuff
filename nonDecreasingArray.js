// // let modCount = 0

// // const checkPossibility = nums => {
// //   if (nums.length === 1) {
// //     return 0
// //   }

// //   if (nums.length === 2) {
// //     return nums[0] < nums[1] ? 0 : 1
// //   }

// //   const mid = nums.length / 2
// //   const left = checkPossibility(nums.slice(0, mid))
// //   const right = checkPossibility(nums.slice(mid))

// //   return modCount <= 1
// // };

// const checkPossibility = (nums) => {
//   let changed = false;
//   let a;
//   let b;
//   for (let i = 0; i < nums.length; i++) {
//     a = nums[i];
//     b = nums[i + 1];
//     if (a >= b) {
//       if (changed) {
//         return false;
//       }
//       b = a - 1;
//       changed = true
//     }
//   }
//   return true;
// }


// const a = [3, 4, 2, 3, 4]
// // const a = [3, 4, 2, 3]
// // const a = [1, 5, 4, 6, 7, 8, 9]
// console.log(checkPossibility(a));

function root(num, power) {
  if (num === 0) {
    return 0
  }

  let lowerBound = 0
  let upperBound = Math.max(1, num)
  var approxRoot = (lowerBound + upperBound) / 2

  while (upperBound - approxRoot >= 0.001) {
    const result = Math.pow(approxRoot, power)
    if (result > num) {
      upperBound = approxRoot
    } else if (result < num) {
      lowerBound = approxRoot
    } else {
      break
    }

    var approxRoot = (lowerBound + upperBound) / 2
  }

  return approxRoot
}

console.log(root(7, 3));
