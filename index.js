// Code your solution here!

function printString(string){
   console.log(string[0])
   if(string.length > 1){
       let substring = string.substring(1, string.length)
       printString(substring)
   } else {
       return true 
   }
}

function reverseString(string){
    if(string.length <= 1){
        return string
    } else {
        return reverseString(string.substring(1)) + string.charAt(0)
    }
}

function isPalindrome(string){
    if(string.length <= 1){
        return true
    } 
    if(string[0] === string[string.length-1]){
        return isPalindrome(string.slice(1, string.length - 1))
    } 
        return false 
}

function addUpTo(arr, i){
    return i ? arr[i] + addUpTo(arr, --i) : arr[i];
}

function maxOf(arr){
    if (arr.length === 1){ 
        return arr[0]
    } else {  
        return Math.max(arr.shift(), maxOf(arr));
    }
}

function includesNumber(arr, num){
    if (!arr.length) {
        return false;
      } else if (arr[0] === num) {
        return true;
      } else {
        return includesNumber(arr.slice(1), num);
      }
}