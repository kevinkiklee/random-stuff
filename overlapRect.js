const isOverlapping = (
  [l1X, l1Y],
  [r1X, r1Y],
  [l2X, l2Y],
  [r2X, r2Y]
) => {
  return !(r1X < l2X || r2X < l1X)
    || !(r2Y > l1Y || r1Y > l2Y)
}

console.log({ true: isOverlapping([0, 2], [2, 0], [1, 3], [3, 1]) });
console.log({ false: isOverlapping([0, 2], [1, 2], [2, 0], [3, 1]) });
// isOverlapping([0, 2], [2, 0], [1, 3], [3, 1]) // true
//  // false
