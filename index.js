// Code your solution here!
function printString(myString) {
  console.log(myString[0]);
  if (myString.length > 1) {
    myString = myString.substring(1);
    printString(myString);
  }
}

function reverseString(string, revArray= []) {
  let index;
  if (string.length > 1) {
    index = string.length - 1;
    revArray.push(string[index]);
    let newString = string.substring(0, index);
    return reverseString(newString, revArray);
  } else {
    revArray.push(string[0]);
    return revArray.join('');
  }
}

function isPalindrome(string, result= true) {
  if(string.length >= 2) {
    if(string[0] !== string[string.length - 1]) {
      result = false;
    }
    string = string.substring(1, (string.length -1));
    isPalindrome(string, result)
  }
  return result;
}

function addUpTo(array, index, sum= 0) {
  sum += array[0];
  if (index > 0) {
    array.shift();
    index -= 1;
    return addUpTo(array, index, sum)
  }
  return sum
}

function maxOf(array, max = 0) {
  if (array.length > 1) {
    if (max < array[0]) {
      max = array[0]
    }
    array.shift();
    return maxOf(array, max)
  }
  return max
}

function includesNumber(array, num, result = false) {
  if (array.length > 1) {
    if (num === array[0]) {
      result = true
    }
    array.shift();
    return includesNumber(array, num, result)
  }
  return result
}

