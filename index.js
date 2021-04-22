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
   
function reverseString(myString){
    // let rString = myString.split("").reverse().join("")
    // return rString

if (myString.length > 1){
    return reverseString(myString.substring(1)) + myString[0]
} else {
    return myString
}

}

function isPalindrome(str){
    let strLen = str.length
    // console.log('str: ', str)
    if (strLen < 2){ 
        // console.log('TRUE!')
        return true 
    } else if (str[strLen - 1] === str[0]){
        // console.log(str.substring(1, strLen - 1))
        return isPalindrome(str.substring(1, strLen - 1))
    } else  {
        // console.log('FALSE!')
        return false
    }
}

function addUpTo(array, idx){
    return idx ? addUpTo(array, idx - 1) + array[idx] : array[idx]
}

function maxOf(array){
    if (array.length === 1) {
        return array[0];
      } else {
        return Math.max(array.pop(), maxOf(array));
      }
}

function includesNumber(array, number){
    if (!array.length){
        return false
    } else if (array[0] === number){
        return true
    } else  {
        return includesNumber(array.slice(1), number)
    }
}