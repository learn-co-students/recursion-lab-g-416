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

  function addUpTo(myArray, myIndex) {
    if (myIndex > 0) {
        return myArray[0] + addUpTo(myArray.slice(1), myIndex - 1)
    } else {
        return myArray[0]
    }
  }

  function maxOf(myArray) {
    if (myArray.length > 1) {
      let maxOfSubArray = maxOf(myArray.slice(1))
      if (myArray[0] > maxOfSubArray) {
        return myArray[0]
      } else {
        return maxOfSubArray
      }
    } else {
      return myArray[0]
    }
  }

  function includesNumber(myArray, myNum) {
    if (myArray.length > 1 ) {
      if (myArray[0] !== myNum) {
        return includesNumber(myArray.slice(1), myNum)
      } else {
        return true
      }
    } else {
      return (myArray[0] === myNum)
    }
  }