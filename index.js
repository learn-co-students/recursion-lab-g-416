// Code your solution here!

function printString(string) {
  console.log(string[0])
  
  if (string.length > 1) {
    let subString = string.substring(1, string.length)
    printString(subString)
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string) {
  if (string.length < 2) {
    return true
  } else if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1))
  } else { 
    return false
  }
}

function addUpTo(array, index) {
  return index ? array[index] + addUpTo(array, index - 1) : array[index]
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (!array.length) {
    return false
  } else if (array[0] === num) {
    return true
  } else {
    return includesNumber(array.splice(1), num)
  }
}
