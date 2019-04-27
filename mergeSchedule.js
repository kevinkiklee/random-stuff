const mergeSchedules = schedules =>
  schedules
    .sort((a, b) => a.startTime - b.startTime)
    .reduce((merged, { startTime, endTime }) => {
      // Take care of the first case.  If merged is empty, then store the first slot
      merged = merged.length ? merged : [{ startTime, endTime }]

      // Define the new slot
      const newSlot = { startTime, endTime }

      // Grab the last entry
      const { startTime: lastStartTime, endTime: lastEndTime } = merged[merged.length - 1]

      // If the last entry is overlapping, we remove that one and update the time
      if (lastStartTime <= startTime && lastEndTime >= startTime) {
        merged.pop()
        newSlot.startTime = lastStartTime
      }

      merged.push(newSlot)
      return merged
    }, [])

const input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

const result = mergeSchedules(input)
console.log({ result });
