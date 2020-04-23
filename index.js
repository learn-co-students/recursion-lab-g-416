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

//   error: expected undefined to equal 10
  function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    } else {
        let newArray = [array[0] + array[1]].concat(array.slice(2, index+1))
            let newIndex = index-1
            addUpTo(newArray, newIndex)
    }
  }

      // if (index !== 0) {
    //     let newArray = [array[0] + array[1]].concat(array.slice(2, index+1))
    //     let newIndex = index-1
    //     addUpTo(newArray, newIndex)
    //   } else {
    //       return array[0]
    //   }


