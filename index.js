// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
        let substring = myString.substring(1, myString.length);
        printString(substring);
    } else {
        return true;
    }
}

function reverseString(string) {
    if (string.length === 0) {
        return "";
    } else {
        return string[string.length - 1] + reverseString(string.substring(0, string.length - 1));
    }
}

function isPalindrome(palindromeWord) {
    if (palindromeWord.length < 2) {
        return true;
    }
    if (palindromeWord.slice(0,1) === palindromeWord.slice(-1)) {
        return isPalindrome(palindromeWord.slice(1,-1))
    }
    return false;
}

function addUpTo(array, index) {
    if (index === 0) {
        return array[0]
    } else if (index > 0) {
        return array[0] + addUpTo(array.slice(1), index - 1)
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0];
    } else if (array.length > 1) {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, number) {
    console.log(array, number)
    if (array[0] === number) {
        return true;
    } else if (array.length > 1) {
        return includesNumber(array.slice(1), number)
    } else {
        return false;
    }
}