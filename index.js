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

