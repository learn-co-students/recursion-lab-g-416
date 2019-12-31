function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1){
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