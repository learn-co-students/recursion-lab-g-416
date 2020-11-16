// Code your solution here!

function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true; 
    }
}

function reverseString(myString){
    console.log(myString[0]);

    if(myString.length < 1){
        return myString 
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(myString) {
    if(myString.slice(0,1) !== myString.slice(-1)) {
      return false
    } else if (myString.length > 1) {
      return isPalindrome(myString.slice(1, -1))
    } else {
      return true
    }
  }
  
  function addUpTo(arr, i) {
    if(i > 0) {
      return arr[0] + addUpTo(arr.slice(1), i - 1)
    } else {
      return arr[0]
    }
  }
  
  function maxOf(arr) {
    if(arr.length > 1) {
      let maxRest = maxOf(arr.slice(1))
      if(arr[0] > maxRest) {
        return arr[0]
      } else {
        return maxRest
      }
    } else {
      return arr[0]
    }
  }
  
  function includesNumber(arr, num) {
    if(arr[0] == num) {
      return true
    } else if (arr.length > 0) {
      return includesNumber(arr.slice(1), num)
    } else {
      return false
    }
  }