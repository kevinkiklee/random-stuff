/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
const findRadius = (houses, heaters) =>
  Math.max(...houses.map(house =>
    Math.min(...heaters.map(heater => Math.abs(heater - house)))))

// const houses = [1, 2, 3, 4, 5]
// const heaters = [1, 5]

const houses = [1,2,3,4]
const heaters = [1,4] // 1
// const houses = [282475249,622650073,984943658,144108930,470211272,101027544,457850878,458777923]
// const heaters = [823564440,115438165,784484492,74243042,114807987,137522503,441282327,16531729,823378840,143542612]
const radius = findRadius(houses, heaters)
console.log({ radius });

// 12345

// 1   5
