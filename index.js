function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    printString(string.slice(1))
  } else {
    return true
  }
}

function reverseString(string) {
  if (string.length > 0) {
    return reverseString(string.substr(1)) + string[0]
  } else {
    return ""
  }
}

function isPalindrome(string) {
  if (string.length > 1) {
    if (string[0] !== string[string.length - 1]) {
      return false
    }
    return isPalindrome(string.substr(1, string.length - 2))
  } else {
    return true
  }
}

function addUpTo(array, index) {
  if (index > 0) {
    return addUpTo(array, index - 1) + array[index]
  } else {
    return array[0]
  }
}

function maxOf(array) {
  if (array.length > 1) {
    let x = maxOf(array.slice(1))
    return x < array[0] ? array[0] : x
  } else {
    return array[0]
  }
}

function includesNumber(array, num) {
  if (array.length > 0 && array[0] !== num) {
    return includesNumber(array.slice(1), num)
  } else {
    return array[0] === num
  }
}
