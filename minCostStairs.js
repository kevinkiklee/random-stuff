/**
 * @param {number[]} cost
 * @return {number} 915
 f[i] = cost[i] + min(f[i+1], f[i+2])
 cost = [1, 2]
 cost = [0, 1, 0]
 */
var minCostClimbingStairs = function(cost) {
  const stairsCount = cost.length
  const totalCost = new Array(stairsCount)

  totalCost[0] = 0
  totalCost[1] = cost[1]

  for (let i = 2; i < cost.length; i += 1) {
    totalCost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i]
  }

  return Math.min(totalCost[stairsCount - 2], totalCost[stairsCount - 1])
};




const input = [0,0,1,1]
const result = minCostClimbingStairs(input)

console.log({ result });
