// function cellCompete(state, days)
// {
//     if (days === 0) {
//         return state
//     }

//     const newState = new Array(state.length)

//     for (let i = 0; i < state.length; i += 1) {
//         const prevCell = i === 0 ? 0 : state[i - 1]
//         const nextCell = i === state.length - 1 ? 0 : state[i + 1]

//         newState[i] = prevCell === nextCell ? 0 : 1
//     }

//     return cellCompete(newState, days - 1)
// }



const runCellularAutomata = (state, days) =>
  days === 0
    ? state
    : state.map((cell, i) => {
      const prevCell = i === 0 ? 0 : state[i - 1]
      const nextCell = i === state.length - 1 ? 0 : state[i + 1]

      return prevCell === nextCell ? 0 : 1
    })

console.log(runCellularAutomata([1, 0, 0, 0, 0, 1, 0, 0], 1)) // === [0, 1, 0, 0, 1, 0, 1, 0]
console.log(runCellularAutomata([1, 1, 1, 0, 1, 1, 1, 1], 2)) // === [0, 0, 0 ,0, 0, 1, 1, 0]
