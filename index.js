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
    if(myString.length > 1) {
      return myString.substring(myString.length - 1) + reverseString(myString.substring(0, myString.length - 1))
    } else {
      return myString
    }
  }

  function isPalindrome(myString) {
    if (myString.length > 1) {
        if (myString[0] === myString[myString.length - 1]) {
            return isPalindrome(myString.substring(1, myString.length - 1));
        } else {
            return false
        }
    } else {
        return true
    }
  }