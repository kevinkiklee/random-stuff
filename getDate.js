// const inputs = [100];
const inputs = [0,1,100,500,1000,1300,1500,4000,6000];

const parseInput = input => ({
  days: Math.floor(input / 1440),
  hours: Math.floor(input % 1440 / 60),
  minutes: Math.floor(input % 1440 % 60),
})

const printClockFormat = inputs =>
  inputs.map(input => {
    const {
      days,
      hours,
      minutes,
    } = parseInput(input)

    const isAm = hours < 12
    const hoursOutput = isAm ? hours : hours - 12
    const minutesOutput = minutes < 10 ? `0${minutes}`: minutes
    const amPmOutput = isAm ? 'am' : 'pm'

    return `${days} day past - time: ${hoursOutput}:${minutesOutput}${amPmOutput}`;
  })

// // helper functions
// const determineDays = input => {
//   const days = Math.floor(input / 1440)
//   const remainingMinutes = input % 1440

// 	return [days, remainingMinutes]
// };

// const determineMinutes = (input, hours) => {
// 	let input = ((input / 60).toFixed(2)) - hours;
// 	input = Math.floor(input * 60);
// 	//adding formatting
// 	if (input <= 10) {
// 		input+="0"
// 	}
// 	return input;
// }

a = printClockFormat(inputs)
console.log(a);
