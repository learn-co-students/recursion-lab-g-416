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
    if (string.length > 1) {
        return reverseString(string.substring(1)) + string[0]
    } else {
        return string
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
        return array[index] + addUpTo(array, --index)
    } else {
        return array[index]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        return Math.max(array.pop(), maxOf(array))
    } else {
        return array[0]
    }
}

function includesNumber(myArray, myNumber) {
    if (!myArray.length) {
      return false;
    } else if (myArray[0] === myNumber) {
      return true;
    } else {
      return includesNumber(myArray.slice(1), myNumber);
    }
  }