// Code your solution here!

function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let mySubstring = string.substring(1, string.length)
        printString(mySubstring)
    } else {
        return true 
    }
}

function reverseString(myString) {
    if (myString.length < 2) {
      return myString;
    } else {
      return reverseString(myString.substring(1)) + myString[0];
    }
  }





