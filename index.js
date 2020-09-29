// Code your solution here!
function printString(str) {
  console.log(str[0]);
  return str.length - 1 > 0 ? printString(str.substring(1)) : true;
}

function reverseString(myString) {
  return myString.length < 2 ?
    myString :
    reverseString(myString.substring(1)) + myString[0];
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  return str[0].toLowerCase() === str[str.length - 1].toLowerCase() ?
    isPalindrome(str.substring(1, str.length - 1)) :
    false;
}

function addUpTo(arr, index) {
  return index === 0 ?
    arr[index] :
    arr[index] + addUpTo(arr, --index)
}

function maxOf(arr) {
  if (arr.length === 1) return arr[0];
  else {
    let val = maxOf(arr.splice(1));
    return arr[0] > val ? arr[0] : val;
  }
}

function includesNumber(arr, number) {
  if (arr.shift() === number) return true;

  return arr.length > 0 ?
    includesNumber(arr, number) :
    false;

}