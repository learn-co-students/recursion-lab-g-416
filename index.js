// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

function isPalindrome(string) {
  if (string.length <= 1) return true;

  if (string[0] !== string[string.length - 1]) {
    return false;
  }

  return isPalindrome(string.substr(1, string.length - 2));
}

function addUpTo(array, index) {
  if (index == 0) {
    return array[index];
  }

  if (index !== 0) {
    return array[index] + addUpTo(array, index - 1);
  }
}

function maxOf(nums) {}

function includesNumber(array) {}
