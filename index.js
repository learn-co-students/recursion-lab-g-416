function printString(str) {
  console.log(str[0]);
  
  if (str.length > 1) {
    let subStr = str.substring(1, str.length);
    printString(subStr);
  } else {
    return true;
  }
}

function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}    

// function isPalindrome(str) {
//   if (str.split('').reverse().join('') === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isPalindrome(str) {
  let l = str.length;

  if (l < 2) {
    return true;
  } else if (str[l - 1] === str[0]) {
    return isPalindrome(str.substring(1, l - 1));
  } else {
    return false;
  }
}

function addUpTo(arr, i){
  return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(arr){
  if (arr.length === 1){
    return arr;
  } else {
    return Math.max(arr.pop(), maxOf(arr));
  }
}

function includesNumber(arr, n){
  if (!arr.length) {
    return false;
  } else if (arr[0] === n) {
    return true;
  } else { 
    return includesNumber(arr.slice(1), n);
  }
}
