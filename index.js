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
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true;
  } else {
    if (myString[0] === myString[myString.length - 1]) {
      return isPalindrome(myString.substring(1, myString.length - 1));
    }
    else {
      return false;
    }
  }
}

function addUpTo(arr, idx) {
  return index ? myArray[index] + addUpTo(myArray, --index) : myArray[index];
}

function maxOf(arr) {
  if (arr.length === 1){
    return arr[0];
  } else {
    const minOfFirstTwo = Math.min(arr[0], arr[1])
    return maxOf(arr.filter( x => x !== minOfFirstTwo))
  }
}

function includesNumber(arr, num) {
  if (arr.length === 1) {
    return arr[0] === num;
  } else {
    if (arr[0] === num) {
      return true;
    } else {
      return includesNumber(arr.filter(x => x !== arr[0]), num);
    }
  }
}
