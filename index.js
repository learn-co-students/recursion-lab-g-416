function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1){
      console.log(myString);
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
}

//Write out a recursive function to reverse a string
//base case is when every letter in original string has been moved to new, reversed position
function reverseString(myString) {
  if (myString.length < 2) {
      return myString;
  } else {
      return reverseString(myString.substring(1)) + myString[0];
  }
}

//write out a recursive fn to see if a word is a palindrome - rtns true or false
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

//Given an array and an index, write a recursive function to add up the elements of an array.
  //javascript does have a subarray fn
  function addUpTo(myArray, index) {
    console.log('myArray[index]', myArray[index]);
    return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
  }

  //Write a recursive function to find the largest integer in an array
    // [1, 4, 5, 3]
    function maxOf(myArray) {
      if (myArray.length === 1) {
        return myArray[0];
      } else {
        return Math.max(myArray.pop(), maxOf(myArray));
      }
    }

//Write out a function to see if an array includes a given element.
function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}