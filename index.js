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
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }

  function isPalindrome(myString) {
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

  function addUpTo(array, index) {
    if (index > 0) {
      return addUpTo(array, index - 1) + array[index]
    } else {
      return array[0]
    }
  }

  function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.pop(), maxOf(myArray));
    }
  }

  function includesNumber(array, element) {
    if (array[0] === element) {
      return true;
    } else if (array.length === 1){
      return false;
    } else {
      return includesNumber(array.slice(1), element);
    }
  }