function printString(str) {
  let substring;
  console.log(str[0])
  if (str.length > 1) {
    substring = str.substring(1, str.length)
    printString(substring)
  } else {
    return true;
  }
}

function reverseString(string) {
  if (string === "") {
    return "";
  } else {
    return reverseString(string.substr(1)) + string.charAt(0);
  }
}

// function reverseString(myString) {
//   if (myString.length < 2) {
//     return myString;
//   } else {
//     return reverseString(myString.substring(1)) + myString[0];
//   }
// }

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  if (str.length === 2) {
    return str[0] === str[1];
  }

  if (str[0] === str.slice(-1)) {
    // return isPalindrome(str.slice(1,-1))
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false;
}

function addUpTo(arr, index) {
  // console.log('arr, index: ', arr, index)
  // arr, index:  [ 1, 4, 5, 3 ] 2
  // arr, index:  [ 1, 4, 5, 3 ] 1
  // arr, index:  [ 1, 4, 5, 3 ] 0
  //               arr[2] = 5           arr[1] = 4 
  return index ? arr[index] + addUpTo(arr, --index) : arr[index];
}

// function maxOf(arr) {
//   if (arr.length === 0 || arr === 'undefined') {
//     return 0;
//   }

//   let sortedArr = arr.sort((a, b) => a < b ? -1 : 1)
//   let last = sortedArr[arr.length - 1]
//   if(arr[0] === last){
//     return arr[0]
//   } else {
//     maxOf(arr)
//   }
// }

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

function includesNumber(arr, n) {
  if (!arr.length) {
    return false;
  } else if (arr[0] === n) {
    return true;
  } else {
    return includesNumber(arr.slice(1), n)
  }
}
