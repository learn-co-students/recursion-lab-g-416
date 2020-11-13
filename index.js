// Code your solution here!

function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true; 
    }
}

function reverseString(myString){
    console.log(myString[0]);

    if(myString.length < 1){
        return myString 
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(inputString){
    if (inputString == inputString.split('').reverse().join('')){
        return true 
    } else {
        return false 
    }
}