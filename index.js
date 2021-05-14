function printString(myString) {
    console.log(myString[0]);
 
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(str) {
    if (str === "") {
        return ""
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

function isPalindrome(str) {
    let length = str.length

    if (length < 2) {
        return true
    } else if (str[0] === str[length - 1]) {
        return isPalindrome(str.substring(1, length - 1))
    } else {
        return false
    }
}

function addUpTo(arr, i) {
    if (i > 0) {
        return arr[i] + addUpTo(arr, (i - 1))
    } else {
        return arr[i]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        return Math.max(arr.pop(), maxOf(arr))
    } else {
        return arr[0]
    }
}

function includesNumber(arr, n) {
    if (!arr.length) {
        return false
    } else if (arr[0] === n) {
        return true
    } else {
        return includesNumber(arr.slice(1), n)
    }
}