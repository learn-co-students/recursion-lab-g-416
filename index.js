function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

//STRING CHALLENGES
//1. reverse a string
function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }
//2. see if a word is a palindrome..

//ARRAY CHALLENGES
// 1. Given an array and an index, write a recursive function to add up the elements of an array.
// 2. Write a recursive function to find the largest integer in an array.
// 3. Write out a function to see if an array includes a given element.

