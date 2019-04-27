// an infinite one-dimensional array of cellular automaton cells with only two states is considered,
// with each cell in some initial state. At discrete time intervals, every cell spontaneously changes
// state based on its current state and the state of its two neighbors.

// For Rule 30, the rule set which governs the next state of the automaton is:
// current pattern	`111	110	101	100	011	010	001	000`
// new state for center cell	`0 0	0	1	1	1	1	0`

// Write a function that returns the state at `k`th iteration.




// const rule30 = (state, k) => {
//   if (k === 0) {
//     return state
//   }

//   const prevState = rule30(state, k - 1)
//   console.log(prevState.map(cell => cell ? '#' : '.').join(''));
//   prevState.unshift(0)
//   prevState.push(0)

//   const newState = []

//   for (let i = 0; i < prevState.length; i += 1) {
//     const leftCell = prevState[i - 1] || 0
//     const centerCell = prevState[i]
//     const rightCell = prevState[i + 1] || 0

//     const pattern = [leftCell, centerCell, rightCell].join('')
//     const newCell = livePatterns.includes(pattern) ? 1 : 0

//     newState.push(newCell)
//   }

//   return newState
// }

// const result = rule30([1], 10)

// function* patternGen(pattern) {
//   while (true) {
//     yield livePatterns.includes(pattern) ? 1 : 0
//   }
// }


const runPattern = livePatterns => {
  function* rule30gen() {
    let state = [0, 1, 0]

    while (true) {
      console.log(state.map(state => state ? '@' : ' ').join(''))
      state.unshift(0)
      state.push(0)

      const newState = []

      for (let i = 0; i < state.length; i += 1) {
        const pattern = `${state[i - 1] || 0}${state[i]}${state[i + 1] || 0}`
        const newCell = livePatterns.includes(pattern) ? 1 : 0
        newState.push(newCell)
      }

      state = newState

      yield newState
    }
  }

  const rule30 = rule30gen()

  const iterCount = 1000

  for (let i = 0; i < iterCount; i += 1) {
    rule30.next().value
  }
}

// const livePatternSet = [
//   ['100', '011', '011', '001']
//   ['100', '011', '010', '001']
//   ['100', '011', '011'],
// ]
// const livePatterns =
// const livePatterns =
// const livePatterns = ['100', '011']


runPattern(['100', '011', '010', '001'])
