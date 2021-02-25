// Code your solution here!

function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let mySubstring = string.substring(1, string.length)
        printString(mySubstring)
    } else {
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

function isPalindrome(word) {
    // return word === reverseString(word) ? true : false 
        if(word.length < 2 || (word[0] === word[1] && word.length === 2)){
            return true
        } else if (word[0] === word[word.length - 1]){
            let remainder = word.substring(1, word.length - 1)
            return isPalindrome(remainder)
        } else {
          return false 
        }
}



