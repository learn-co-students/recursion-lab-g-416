// Code your solution here!
function printString(string){
  console.log(string[0]);
  if(string.length > 1){
    return printString(string.substring(1, string.length))
  }else{
    return true
  }
}

function reverseString(string) {
  if (string.length < 2) {
    return string;
  } else {
    return reverseString(string.substring(1)) + string[0];
  }
}

function isPalindrome(string){
  if (string.length < 2) {
    return true
  } else if(string[string.length - 1] === string[0]){
    return isPalindrome(string.substring(1, string.length - 1))
  }else{
    return false
  }
}

function addUpTo(array, i) {
  if (i > 0){
    return addUpTo(array, i - 1 ) + array[i]
  }else{
    return array[0]
  }
}

function maxOf(array) {
  if (array.length === 1) {
    return array
  }else{
    return Math.max(array.pop(), maxOf(array))
  }
}

function includesNumber(array, num) {
  if (array[0] === num ) {
    return true
  }else if(array.length < 1){
    return false
  }else{
    return includesNumber(array.slice(1), num)

  }
}
