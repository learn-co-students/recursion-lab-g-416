// Code your solution here!
function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(string){
  return (string === '') ? '' : reverseString(string.substr(1)) + string.charAt(0);
}

function isPalindrome(string){
  let reverse = reverseString(string)

  if(string === reverse){
    return true
  }else{
    return false
  }
}
