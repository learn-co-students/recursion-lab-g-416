// Code your solution here!

function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    const substring = string.substring(1, string.length)
    printString(substring)
  }
}

// reverse a string
function reverseString(string) {
  let reverse = '';
  if (string.length >= 1){
    const substring = string.substring(0, string.length - 1)
    reverse = string[string.length - 1] + reverseString(substring)
  }
  return reverse;
}

function isPalindrome(string) {
  let boolean = false;
  if (string[0] === string[string.length - 1]) {
    if (string.length <= 1) {
      return true;
    } else {
       boolean = isPalindrome(string.substring(1, string.length - 1));
    }
  } else {
    boolean = false;
  }
  return boolean;
}

function addUpTo(array, index) {
  let total = 0;
  if (index >= 1) {
    total = array[index] + addUpTo(array.slice(0, index), index - 1);
  } else {
    return array[index];
  }
  return total;
}

function maxOf(array, max=undefined) {
  max = max || array[0];
  if (array.length > 1) {
    if (max < array[1]) {
      max = array[1];
    }
    max = maxOf(array.slice(1, array.length), max)
  }
  return max;
}

function includesNumber(array, number) {
  let hasNumber = false;
  if (array.length > 0) {
    if (array[0] === number) {
      hasNumber = true;
    } else {
      hasNumber = includesNumber(array.slice(1, array.length), number);
    }
  }
  return hasNumber;
}