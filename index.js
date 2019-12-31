function printString(myString) {
    console.log(myString[0]);
  
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }

function reverseString(myString){ 
    if (myString.length > 1) {
        return reverseString(myString.substr(1)) + myString.charAt(0)
    } else {
      return myString;
    }
  }

function isPalindrome(string){
    if (string === reverseString(string.substr(1)) + string.charAt(0))
        return true
    else
        return false
}

function addUpTo(arr, i){
    
    
}

function maxOf(arr){
    let nums = arr.slice();

    if (nums.length == 1) { return nums[0]; }

    if (nums[0] < nums[1]) { nums.splice(0,1); }
    else { nums.splice(1,1); }

    return maxOf(nums);
}

function includesNumber(arr, num){
    let nums = arr.slice()
    
}