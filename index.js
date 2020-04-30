// Code your solution here!
function printString(string) {
  console.log(string[0]);
  if (string.length > 1) {
    return printString(string.slice(1));
  }
}

function reverseString(string) {
  console.log(string[string.length - 1]);
  if (string.length > 1) {
    return [string[string.length - 1], reverseString(string.slice(0, string.length - 1))].join("");
  } else {
    return string[0];
  }
}

function isPalindrome(string) {
  if(string[0] === string[string.length - 1]) {
    if(string.length > 1) {
      return isPalindrome(string.slice(1, string.length - 1))
    } else {
      return true;
    }
  }
  return false;
}

function addUpTo(array, index) {
  if(index === 0) {
    return array[index];
  }
  return array[index] + addUpTo(array, index - 1);
}

function maxOf(array) {
  if(array.length === 1) { 
    return array[0];
  }
  const subMax = maxOf(array.slice(1));
  return array[0] > subMax ? array[0] : subMax;
}

function includesNumber(array, number) {
  if(array[0] === number) {
    return true;
  } else {
    if(array.length > 1) {
      return includesNumber(array.slice(1), number);
    } else {
      return false;
    }
  }
}