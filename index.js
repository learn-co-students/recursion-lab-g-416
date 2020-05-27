// Code your solution here!

function printString(string){
  console.log(string[0])
  if (string.length > 1){
    let mySubstring = string.substring(1, string.length);
    printString(mySubstring)}
  else{
    return true
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString;
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(string){
  let l = string.length
  if(l < 2){
    return true
  }
  else if(string[0] === string[string.length-1]){
    return isPalindrome(string.substring(1,string.length - 1))
  }
  else{
    return false
  }
}

function addUpTo(arr, ind){
  if(ind ){
    return arr[ind] + addUpTo(arr, ind-1)
  }
  else{
    return arr[ind]
  }
}

function maxOf (arr){
  if ( arr.length === 1){
    return arr[0]
  }
  else{
    return Math.max(arr.pop(), maxOf(arr))
  }
}


function includesNumber(arr, num){
  if (arr.length === 0) {
    return false
  }
  else{
    if(arr[0]===num){
      return true
    }
    else{
      arr.shift()
      return includesNumber(arr, num)
    }
  }
}
