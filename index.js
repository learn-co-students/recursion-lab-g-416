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

function includesNumber(array) {}

function addUpTo(array, index) {
  //take index number
  // have a count
  // count + indexOf(index)
  // index - 1
  // count + indexOf(index)

  let sum = 0;
  sum += indexOf(index);
}

function maxOf(nums) {}
