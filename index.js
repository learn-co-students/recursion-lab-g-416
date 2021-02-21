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
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
}

function isPalindrome(str) {
    let length = str.length;
    if (length === 0 || length === 1) {
      return true;
    }
    if (str[0] === str[length - 1]) {
      return isPalindrome(str.slice(1, length - 1) );
    }  
    return false;
}

function addUpTo(arr, i) {
    if (i === 0)
    return arr[0]
    else 
    return arr[i] + addUpTo(arr, --i)
}

function maxOf(arr) {
    if (arr.length === 1)
    return arr[0]
    else 
    return Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num) {
    if (!arr.length) {
    return false
    } else if (arr[0] === num) {
        return true
    } else {
        return includesNumber(arr.slice(1), num)
    }
}
