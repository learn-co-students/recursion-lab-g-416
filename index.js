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

  function reverseString(myString) {
      let newString = []
      function reverse(string) {
        if (string.length > 1) {
        let letter = string[string.length - 1]
        let remainder = string.substring(0, string.length - 1)
        newString.push(letter)
        reverse(remainder)
        }
    else {
      newString.push(string)
    }
  }
  reverse(myString)
    console.log(newString.join(''))

  }