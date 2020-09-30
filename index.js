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

  function reverseString(string) {
    let rev = string[string.length - 1]
    if (string.length > 1) {
        let sub = string.substring(0, string.length - 1)
        return rev += reverseString(sub);
    }
    return rev
}

function isPalindrome(string) {
    if (string.length > 2) {
      if (string[0] === string[string.length - 1]) {
        let sub = string.substring(1, string.length - 1);
        return isPalindrome(sub);
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

function addUpTo(arr, idx) {
    let sum = 0
    if (idx > 0) {
        let newArr = arr.slice(0, idx)
        sum += addUpTo(newArr, idx - 1) + arr[idx]
        idx--
    } else if (idx === 0) {
      return sum += arr[0]
    }
    return sum
}

function maxOf(arr) {
    if (arr.length === 1) {
      return arr[0];
    } else if (arr.length > 1) {
      if (arr[0] >= arr[arr.length - 1]) {
        arr.pop();
        return maxOf(arr);
      } else {
        let newArr = arr.slice(1);
        return maxOf(newArr);
      }
    }
  }

  function includesNumber(arr, num) {
    if (arr[0] === num) {
        return true;
    }
    if (arr.length > 1) {
        let newArr = arr.slice(1);
        return includesNumber(newArr, num);
    } else {
        return false;
    }
}