// differentiate("12x+2", 3)      ==>   returns 12
// differentiate("x^2+3x+2", 3)   ==>   returns 9
// differentiate("x^2-3x+2", 3)   ==>   returns 9

const createOpNode = ({ op, left, right }) => ({
  type: 'Node', op, left, right,
})

// const flatten = array => array.reduce((acc, el) => acc.concat(el), [])
const splitEquation = equation => {
  const chunks = []

  for (let i = 0; i < equation.length; i += 1) {

  }
}

const parseEquation = equation => {
  for (let i = 0; i < equation.length; i += 1) {

  }
}

const differentiate = (equation, input) => {

  return equation
    .split(/\+|\-/)
    .map(term => {
      console.log({ term });
      let coefficent = 1
      let indeterminate = 0
      let exponent = 1
      let constant = 0

      if (term.match(/x/)) {
        indeterminate = 1
        coefficent = term.split('x')[0] || 1

        if (term.match(/\^/)) {
          exponent = term.match(/(.*)\^/)[1]
        }
      } else {
        coefficent = 0
        exponent = 0
        constant = term
      }

      console.log( {constant});
      console.log( {exponent});
      // console.log( {coefficent});
      // console.log( {indeterminate});
      return [
        coefficent,
        indeterminate,
        exponent,
        constant,
      ]
    })
  .map(term => term.map(el => parseInt(el, 10)))
}

// coefficient
// indeterminate
// exponent
const derivative = differentiate("x^2-3x+2", 3)

console.log({ derivative })
