function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

//Write out a recursive function to reverse a string.
function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }

//Write out a recursive function to see if a word is a palindrome.
function isPalindrome(string) {
    if (string.length > 1) {
        if (string[0] === string[string.length-1]) {
            return isPalindrome(string.slice(1, string.length-1))
        } else {
            return false
        }
    }
    return true
}

function addUpTo(array, index) {
    if (index > 0) {
        return addUpTo(array, index-1) + array[index]
    } else {
        return array[0]
    }
}

function maxOf(arr) {
    //pop() method removes the last element of an arr and returns that element.
    if (arr.length === 1) {
        return arr[0]
    } else {
        return Math.max(arr.pop(), maxOf(arr))
    }
}

function includesNumber(arr, num) {
    if (arr.length === 0) {
        return false
    } 
    else if (arr[0] === num) {
        return true
    } else {
        return includesNumber(arr.slice(1), num)
    }
}