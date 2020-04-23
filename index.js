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

  function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    } else {
        let newArray = [array[0] + array[1]].concat(array.slice(2, index+1))
            let newIndex = index-1
            return addUpTo(newArray, newIndex)
    }
  }

function maxOf(array) {
    if (array.length > 1) {
        array[0] > array[1] ? array.splice(1,1) : array.splice(0,1)
        return maxOf(array)
    } else {
        return array[0]
    }
}  



