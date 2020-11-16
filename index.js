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

function reverseString(myString, reversedString = "") {
// pull one letter from the end of the string  and append to a save to reversed string
    reversedString += myString[myString.length - 1]
    if(myString.length > 1) {
        let currentString = myString.substring(0, myString.length - 1)
        return reverseString(currentString, reversedString)
    } else {
        console.log(reversedString)
        return reversedString
    }
}

function isPalindrome(myString) {
    // compare first letter to last letter
    // if equal remove both
    // call is Palindrome
    if(myString[0] === myString[myString.length -1] && myString.length > 1) {
        let newString = myString.substring(1, myString.length - 1)
        return isPalindrome(newString)
    } else if(myString[0] !== myString[myString.length -1]) {
        return false
    } else {
        return true
    }
}
// 1,2,3,4 - 2
function addUpTo(array, i) {
    if(i > 0) {
        let newArray = array.slice(1, array.length)
        newArray[0] = array[0] + array[1]
        i -= 1
        return addUpTo(newArray, i)
    } else {
        return array[0]
    }
}

function maxOf(array) {
    let max = null 
    if(array.length > 1 && array[0] > array[1]) {
        max = array[0]
        let newArray = array.slice(1)
        newArray[0] = max
        return maxOf(newArray)
    } else if(array.length > 1  && array[0] <= array[1]) {
        let newArray = array.slice(1)
        return maxOf(newArray)
    } else if(array.length === 1) {
        return array[0]
    }

}

function includesNumber(array, n) {
    if(array.length > 0 && array[0] === n) {
        return true
    } else if(array.length > 0 && array[0] !== n) {
        let newArray = array.slice(1)
        return includesNumber(newArray, n)
    } else {
        return false
    }
}
