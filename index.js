// Code your solution here!

function printString(string) {

  console.log(string[0])

  if (string.length > 1) {
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}

// printString("That's not good...")

function reverseString(string) {
  // original
  // let reversed = (string[4] + string[3] + string[2] + string[1]) + string[0]
  // return reversed

  if (string.length < 2) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

function isPalindrome(string) {
  // is char in string an even number of times
  
  // is there at most 1 char in an odd number of time

  let len = string.length

  if (len < 2) { // the base case
    return true
  } else if (string[len - 1] === string[0]) {
    return isPalindrome(string.substring(1, len - 1))
  } else {
    return false // if the first and last letters aren't the same
  }
}

function addUpTo(array, index) {
  const first = array[0]
  const second = array[1]

  if (index === 0) {
    return first
  } else {
    return addUpTo([first + second, ...array.slice(2, array.length)], index - 1)
  }
  // Below works too!
  // return index === 0 ? first : addUpTo([first + second, ...array.slice(2, array.length)], index - 1)
}
// addUpTo([1, 4, 5, 3], 2)
// addUpTo([4, 3, 1, 5], 1)

function maxOf(arr) {

  if (arr.length === 1) return arr[0]

  if (arr[0] > arr[1]) return maxOf(arr.splice(0, 1))
  if (arr[0] < arr[1]) return maxOf(arr.slice(1))
}

// maxOf([1, 4, 5, 3])

function includesNumber(arr, num) {

  if (arr[0] === num) return true
  if (arr.length === 1) return false
  return includesNumber(arr.slice(1), num)
}

// includesNumber([1, 4, 5, 3], 5)