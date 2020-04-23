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
    if (string) {
        return reverseString(string.substr(1)) + string[0]
    } else {
        return string
    }
  }

  function isPalindrome(string) {
    if (string.length > 2 && string[0] === string[string.length-1]) {
        let substring = string.substr(1, string.length-2)
        isPalindrome(substring)
    } else {
        return false
    }
    return true
  }

