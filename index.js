// Code your solution here!

function printString(myString) {
  if (myString.length > 1) {
    console.log(myString[0]);
    printString(myString.slice(1))  ;
  } else {
    console.log(myString);
    return true;
  }
}

function reverseString(myString) {
  const stringLength = myString.length
  if (stringLength > 1) {
    return myString[stringLength - 1] + reverseString(myString.slice(0, stringLength - 1));
  } else {
    return myString;
  }
}

function isPalindrome(myString) {
  const stringLength = myString.length;
  if (stringLength > 1) {
    return myString[0] === myString[stringLength - 1] && isPalindrome(myString.slice(1, stringLength - 1));
  } else {
    return true;
  }
}

function addUpTo(inputArray, index) {
  if (index > 0) {
    const subArray = inputArray.slice(0, index);
    return addUpTo(subArray, index-1) + inputArray[index];
  } else {
    return inputArray[0];
  }
}

function maxOf(inputArray, memo=0) {
  const arrLength = inputArray.length;
  const newMemo = inputArray[0] > memo ? inputArray[0] : memo;
  if (arrLength > 1) {
    return maxOf(inputArray.slice(1), newMemo);
  } else {
    return newMemo;
  }
}

function includesNumber(inputArray, element) {
  const arrLength = inputArray.length;
  if (arrLength > 1) {
    return inputArray[0] === element || includesNumber(inputArray.slice(1), element);
  } else {
    return inputArray[0] === element;
  }
}

/*
[5, 8, 10, 20, 33, 18, 12], 4


*/