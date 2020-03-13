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

function reverseString(myString) {
  if (myString === "") {
    return myString 
   } else {
    return reverseString(myString.substr(1)) + myString[0]
  }
}

function isPalindrome(myString) {
  if (myString[0] === myString[(myString.length - 1)] && myString.length > 1) {
      isPalindrome(myString.slice(1, (myString.length - 1)))
      return true
  } else {
      return false
  }
}

function addUpTo(array, index) {
  if (index > 0) {
      return addUpTo(array, (index-1)) + array[index]
  } else {
      return array[index]
  }
}

function maxOf(array) {
  if (array.length === 1 ) {
    return array[0]
  } else {
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, number){
  if (!array.length) {
    return false;
  } else if (array[0] === number) {
    return true;
  } else {
    return includesNumber(array.slice(1), number);
  }
}