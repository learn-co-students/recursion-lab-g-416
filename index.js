

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
    if (string.length < 2) {
        return string;
    } else {
        return reverseString(string.substring(1)) + string[0];
      }
    }

  function isPalindrome(string) {
    const lastIndex = string.length - 1 

    if (string.length < 2) {
        return true 
    } else if (string[lastIndex] === string[0]) {
        return isPalindrome(string.substring(1, lastIndex))
    } else {
        return false 
    }
  }

  function addUpTo(array, index) {
      if (index > 0 ) {
          array[1] += array[0]
          return addUpTo(array.slice(1), index - 1)
      } else {
          return array[0]
      }
  }

  function maxOf(array) {

    if (array.length > 1) {
        if (array[0] < array[1]) {
            return maxOf(array.slice(1))
        } else {
            array[1] = array[0]
            return maxOf(array.slice(1))
        }
    } else {
        return array[0]
    }
  }

  function includesNumber(array, number) {
      if (array[0] == number) {
        return true 
      } else if (array.length > 1) {
        return includesNumber(array.slice(1), number)
      } else {
        return false
      }
           
  }