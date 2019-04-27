class Stack {
  constructor() { this.store = [] }
  push(el) { this.store.push(el) }
  pop() { return this.store.pop() }
  peek() { return this.store[this.store.length - 1] }
  toString() { return `store = [${this.store.toString()}]` }
}

class Node {
  constructor({ disc, from, to }) {
    this.disc = disc
    this.from = from
    this.to = to
    this.moves = []
  }
}

class TowerOfHanoi {
  constructor(discCount) {
    this.game = this.buildGame(discCount)
    this.isSolved()
    this.log = []
    this.max = 10
  }

  buildGame(discCount) {
    const game = [new Stack(), new Stack(), new Stack()]

    let discSize = discCount

    while (discSize > 0) {
      game[0].push(discSize)
      discSize -= 1
    }
    console.log(game);

    return game
  }

  solveGame() {
    while (!this.isSolved()) {

    }

    return this.solve(this.discCount)
  }

  isSolved() {
    this.max += 1
    if (this.max > 10) {
      return
    }

    return !this.game[0].peek() && !this.game[1].peek() && this.game[2].peek() === 1
  }
}

const discCount = 2
const towerOfHanoi = new TowerOfHanoi(discCount)
const solution = towerOfHanoi.solveGame()
console.log(solution)
// States when n=1
// ```
// top of a = 5
// top of b = empty
// top of c = empty

// top of a = 5
// top of b = number greater than a (can move to here)
// top of c = empty (can move to here)

// top of a = 5
// top of b = number less than a (cannot move here)
// top of c = empty (can move here)

// top of a = 5
// top of b = empty (can move here)
// top of c = number greater than a (can move here)

// top of a = 5
// top of b = empty (can move here)
// top of c = number less than a (cannot move here)

// top of a = 5
// top of b = number greater than a (can move here)
// top of c = number less than a (cannot move here)

// top of a = 5
// top of b = number less than a (cannot move here)
// top of c = number greater than a (can move here)
// ```


// ```
// moveTwo:
// move 1 to non-target
// move 2 to target
// move 1 to target

// moveThree:
// move 1 to target
// move 2 to non-target
// move 1 to non-target
// move 3 to target
// move 1 to origin
// move 2 to target
// move 1 to target
// ```



// 1
// 2 - -

// 2 1 -

// - 1 2

//     1
// - - 2


// 1
// 2
// 3

// 2
// 3 - 1

// 3 2 1

//   1
// 3 2

//   1
// - 2 3

// 1 2 3

//     2
// 1 - 3

//     1
//     2
// - - 3

// 1 a c / tgt
// 2 a b / non
// 1 c a / non
// 3 a c / tgt
// 1 b a / non
// 2 b c / tgt
// 1 a c / tgt




// const node = {
//   disc: 1,
//   from: 'a',
//   to: 'c',
//   moves: [

//   ]
// }







// 1
// 2
// 3
// 4 - -

// 2
// 3
// 4 1 -

// 3
// 4 1 2

// 3   1
// 4   2

//     1
// 4 3 2

// 1
// 4 3 2

// 1 2
// 4 3 -

//   1
//   2
// 4 3 -

//   1
//   2
// - 3 4


//   2
// 1 3 4

//     2
// 1 3 4

//   1 2
//   3 4

//   1
// 2 3 4

// 1
// 2 3 4

// 1   3
// 2 - 4

//     3
// 2 1 4

//     2
//     3
// - 1 4

//     1
//     2
//     3
// - - 4



//   2 1
//   3 4

//     1
// 2 3 4

// 1
// 2 3 4

// 1   3
// 2 - 4

//     3
// 2 1 4

//     2
//     3
// - 1 4

//     1
//     2
//     3
// - - 4
