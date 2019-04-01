/**
 *  Takes two numbers, returns the first incremented by the second
 * @param {number} numberToIncrement - Number to increment
 * @param {number} incrementBy - How much to increment by
 */
function incrementByN(numberToIncrement: number, incrementBy: number) {
  let number = numberToIncrement

  return (number += incrementBy)
}

export default incrementByN
