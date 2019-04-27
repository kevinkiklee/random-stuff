// const collectedData = new Array(fns.length)

// const fetchCb = (i, data) => {
//   collectedData[i] = data

//   if (collectedData.filter(Boolean).length === fns.length) {
//     cb(collectedData)
//   }
// }

// return ({ id }) => {
//   fns.forEach((fn, i) => fn({ id }, fetchCb.bind(null, i)))
// }

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

const DB = [
  {
    user: 'rick',
    order: '#123',
    detail: 'plumbus'
  },
  {
    user: 'morty',
    order: '#456',
    detail: 'plumbus v2'
  },
]

const fetchUser = ({ id }, cb) => setTimeout(() => cb(DB[id].user), getRandomInt(1000))
const fetchOrder = ({ id }, cb) => setTimeout(() => cb(DB[id].order), getRandomInt(1000))
const fetchDetail = ({ id }, cb) => setTimeout(() => cb(DB[id].detail), getRandomInt(1000))

const combineFetch = (fns, cb) => {
  const combinedData = new Array(fns.length)
  let count = 0

  const fetchCb = index => data => {
    combinedData[index] = data
    count += 1

    if (count === fns.length) {
      cb(combinedData)
    }
  }

  return ({ id }) => {
    fns.forEach((fn, index) => fn({ id }, fetchCb(index)))
  }
}
// const out = []
// return id => {
//   const next = data => {
//     if (data) out.push(data)
//     if (fns.length) {
//       const fn = fns.shift()
//       return fn(id, next)
//     }
//     return cb(out)
//   }
//   return next()
// }

const fetchFns = [fetchUser, fetchOrder, fetchDetail]
const combinedFetch = combineFetch(fetchFns, data => console.log(data))
combinedFetch({ id: 0 })

/*
Provided a set of asynchronous functions, output the combined the results of their callbacks.
*/
