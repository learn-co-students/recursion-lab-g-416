// Code your solution here!

function printString(string) {
    console.log(string[0]);
    
    if (string.length > 1) {
        printString(string.substring(1));
    } else {
        return true;
    }
}


// function reverseString(string) {
//     if (string === "") {
//         return string
//     } else {
//         return reverseString(string.substr(1)) + string[0]
//     }
// }

function reverseString(string) {
    console.log(string)
    if (string.length > 0) {
        return reverseString(string.substring(1)) + string[0];
    } else if (string === "") {
        return string
    }
}


function isPalindrome(string) {
    let l = string.length;

    if (l < 2) {
        return true;
    } else if (string[0] === string[l - 1]) {
        return isPalindrome(string.substring(1, l - 1));
    } else {
        return false;
    }
}
// If it makes it to a string length less that 2, it is a palindrome.
// Compare first letter and last letter of the string.
// If they are the same, recursively call the function passing in the string without the first letter and last letter.
// If it either reaches one letter or does not match, continue.


function addUpTo(array, index) {
    if (index > 0) {
        return array[index] + addUpTo(array, --index)
    } else {
        return array[index]
    }
}


function maxOf(myArray) {
        
    if (myArray.length === 1) {
        return myArray[0]
    } else {
        return Math.max(myArray.pop(), maxOf(myArray))
    }
}

function includesNumber(array, number) {
    
    if (array.length === null || array.length == 0) {
        return false
    } else if (array[0] === number) {
        return true
    } else {
        return includesNumber(array.slice(1), number);
    }
}

// Go through each number in array and compare against number.
// If number in array matches, number, return true.
// Else, continue onto next number and compare...
// Until there are no more numbers in array.