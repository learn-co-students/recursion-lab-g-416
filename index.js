function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    let substring;
    substring = string.substring(1, string.length);
    printString(substring);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string.length <= 1) {
    return string
  } else {
    return reverseString(string.substring(1)) + string[0]
  }
}

function isPalindrome(string) {
  let len = string.length
  if (len < 2) {
    return true
  } else if (string[len - 1] == string[0]) {
    return isPalindrome(string.substring(1, len - 1));
  } else {
    return false
  }
}

function addUpTo(array, index) {
  if (index == 0) {
    return array[index];
  } else {
    return array[index] + addUpTo(array, index - 1);
  }
}

function maxOf(array) {
  if (array.length == 1) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (!array.length) {
    return false
  } else if (array[0] == num) {
    return true
  } else {
    return includesNumber(array.slice(1), num)
  }
}