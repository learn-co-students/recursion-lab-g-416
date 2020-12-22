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

// printString("pizza")

function reverseString(myString) {
  if (myString.length > 1) {
    
    return myString.slice(-1) + reverseString(myString.slice(0, -1))
  } else {

    return myString
  }
}

// console.log(reverseString('cat'))

function isPalindrome(myString) {
  if (myString.length <= 1) {

    return true
  } else if (myString[0] === myString[myString.length - 1]) {
      
    return isPalindrome(myString.slice(1, -1))
  } else {

    return false
  }
}

// console.log(isPalindrome('cat'))

function addUpTo(arr, targetIndex) {
  if (targetIndex > 0) {

    return arr[targetIndex] + addUpTo(arr, targetIndex - 1)
  } else {

    return arr[targetIndex]
  }
}

// console.log(addUpTo([1, 2, 3, 4], 2))

function maxOf(arr) {
  if (arr.length <= 1) {
    return arr
  } else {
    if (arr[0] < arr[1]) {
      arr.splice(0,1)
    } else {
      arr.splice(1,1)
    }
    
    return maxOf(arr)
  }
}

// console.log(maxOf([41, 2, 31, 43]))

function includesNumber(arr, target) {
  if (arr[0] === target) {
  
    return true
  } else if (arr.length > 1){ 

    return includesNumber(arr.slice(1), target)
  } else {

    return false
  }
}

console.log(includesNumber([2, 2, 31, 43], 41))

// go through a