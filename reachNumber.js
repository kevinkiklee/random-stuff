// *[Reach a Number]*

// You are standing at position 0 on an infinite number line. There is a goal at position target.
// On each move, you can either go left or right. During the n-th move (starting from 1), you take `n` steps.
// Return the minimum number of steps required to reach the destination.

// ```Input: target = 3
// Output: 2
// Explanation:
// On the first move we step from 0 to 1.
// On the second step we step from 1 to 3.

// Input: target = 2
// Output: 3
// Explanation:
// On the first move we step from 0 to 1.
// On the second move we step  from 1 to -1.
// On the third move we step from -1 to 2.``` 820
// 0 -> -1 -> // 510
// -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10
//                  1   2     3       4
//
// -5 -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10
//                  1
//              2
//                    3
//           4
//                      5
//        6
//
// -5 -4 -3 -2 -1 0 1 2 3 4 5
//              1 
//                  2
//           3 
//                    4
//        5  
//                       6

const countSteps = target => {
  let current = 0
  let step = 1

  const isEven = target % 2 === 0


}