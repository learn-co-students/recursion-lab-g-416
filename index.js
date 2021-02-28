function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(str) {
    if (str === "") {
        return "";
    } else {
        return reverseString(str.substr(1)) + str.charAt(0);
    }
}

function isPalindrome(string) {
    if (string.length <= 1) {
        return true;
    }
    
    let [firstLetter] = string;
    let lastLetter = string[string.length - 1];
    
    if (firstLetter === lastLetter) {
        let stringWithoutFirstAndLastLetters = string.substring(1, string.length - 1);
        return isPalindrome(stringWithoutFirstAndLastLetters);
    } else {
        return false;
    }
}

function addUpTo(myArray, index) {
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(myArray) {
    if (myArray.length === 1) {
      return myArray[0];
    } else {
      return Math.max(myArray.pop(), maxOf(myArray));
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