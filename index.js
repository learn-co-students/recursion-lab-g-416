// Code your solution here!

function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    printString(string.substring(1, string.length))
  }
}

function reverseString(string) {
  if (string.length === 1) {
    return string;
  } else {
    return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
  }
}

function isPalindrome(string) {
  if (string.length <= 1) {
    return true;
  } 
  
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.substring(1, string.length - 1));
  }
  
  return false;
}

function addUpTo(array, index) {
  if (array.length === 1) {
    return array[0];
  } else {
    return array[index] + addUpTo(array.slice(0, index), index - 1)
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array[0];
  }
  
  if (array[1] > array[0]) {
    return maxOf(array.slice(1));
  } else {
    return maxOf(array.slice(0, 1).concat(array.slice(2)));
  }
}

function includesNumber(array, number) {
  if (array[0] === number) {
    return true;
  }
  
  return array.length === 1 ? false : includesNumber(array.slice(1), number)
}









