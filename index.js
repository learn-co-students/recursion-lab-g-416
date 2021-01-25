function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}


function reverseString(string) {
    // reverses all letters in a string
    // reverseString('pizza') //=> azzip
    if (string.length < 2) {
        return string
    }
    else {
        return reverseString(string.substring(1)) + string[0];
    }
}

function isPalindrome(string) {
    // checks if string is a palindrome
    // isPalindrome('racecar') //=> true
    // isPalindrome('pizza') //=> false
    if (string.length < 2) {
        return true
    }
    else if (string[string.length - 1] === string[0]) {
        return isPalindrome(string.substring(1, string.length - 1))
    }
    else {
        return false
    }
}

function addUpTo(array, index) {
    // adds all integers up to given index
    // addUpTo([1, 2, 3, 4], 2) //=> 6
    if (index > 0) {
        return addUpTo(array, index - 1) + array[index]
    }
    else {
        return array[0]
    }
}

function maxOf(array) {
    // finds integer of array with highest value
    // maxOf([1, 2, 3, 4]) //=> 4
    if (array.length === 1) {
        return array
    }
    else {
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, number) {
    //returns true if includes a number, false if it does not
    // includesNumber([1, 2, 3, 4], 4) //=> true
    // includesNumber([1, 2, 3, 4], 7) //=> false
    if (array[0] === number) {
        return true
    }
    else if (array.length < 1) {
        return false
    }
    else {
        return includesNumber(array.slice(1), number)
    }
}