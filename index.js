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
    let l = myString.length;
  
    if (l < 2) {
      return true;
    } else if (myString[l - 1] === myString[0]) {
      return isPalindrome(myString.substring(1, l - 1));
    } else {
      return false;
    }
  }

  function addUpTo(arr, i) {
    if(i < 1){
      return arr[i]
    }else{
      return addUpTo(arr, (i - 1)) + arr[i]
    }
  }

  function maxOf(arr){
    if(arr.length < 2){
      return arr[0]
    }else{
      return arr[0] > arr[arr.length - 1] ? maxOf(arr.slice(0, arr.length - 1)) : maxOf(arr.slice(1))
    }
  }

  function includesNumber(arr, num){
    if(arr.length === 0){
      return false
    }else if(arr.length > 0){
      return arr[0] === num ? true : includesNumber(arr.slice(1), num)
    }
  }