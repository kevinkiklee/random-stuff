// 1110

// So in my application I want to create a UI component that displays the date
// an interview occurred on. Interviews that occurred longer ago are less
// relevant than recent ones so I would like to use color as a hint.
// If an interview occurred today I want it to show in the Surge-company
// blue `#61cbf3`, if it happened 18 months ago or more, I want it to show
// gray `#888888` and the full gradient in between -
// so a date of 9 months before now would be halfway between those two colors,
// a month ago I want mostly-blue-with-some-gray, etc.

// Write a function `getGradientColorForDate(Date) => string`
// where the output string returns the color for the passed in date.
// This output string can be of the format `rgb(0-256, 0-256, 0-256)`
// or in the 6-digit hex format.
// 61cbf3
// 888888

const START_COLOR = '61cbf3'
const END_COLOR = '888888'

const toSeconds = (...dates) => dates.map(date => date.getTime() / 1000)

const getGradientColorForDate = dateString => {
  const startDate = Date.now()
  const targetDate = new Date(dateString)
  const endDate = new Date(dateString)

  const [
    startTime,
    targetTime,
    // endTime
  ] = toSeconds(
    Date.now(),
    new Date(dateString),

  )

  return [
    startTime,
    targetTime
  ]
}

const inputDates = [
  'Jan-23-2019',
  'Jan-01-2019',
  'Dec-11-2018',
  'Nov-12-2018',
  'Oct-13-2018',
  // 'Sep-14-2018',
  // 'Aug-15-2018',
  // 'Jul-16-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
  // 'Jun-17-2018',
]

console.log({
  'Hex Colors': inputDates.map(getGradientColorForDate)
})
