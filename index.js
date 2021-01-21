function printString(string) {
    console.log(string[0]);
    if (string.length > 1) {
        let substring = string.substring(1, string.length);
        printString(substring)
    } else {
        return true;
    }
}

function reverseString(string) {
    if (string.length < 2) {
        return string;
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(string) {
    if (string.length < 2) {
        return true;
    } else if (string[0] !== string[string.length - 1]) {
        return false;
    } else {
        return isPalindrome(string.substring(1, string.length - 1))
    }
}

function addUpTo(array, index) {
    if (array.length === 1) {
        return array[0];
    } else {
        return addUpTo(array.slice(0, index), index - 1) + array[index]
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0];
    } else if (array[0] > array[array.length - 1]) {
        return maxOf(array.slice(0, array.length - 1))
    } else {
        return maxOf(array.slice(1))
    }
}

function includesNumber(array, n) {
    if (!array.length) {
        return false;
    } else if (array[0] === n) {
        return true;
    } else {
        return includesNumber(array.slice(1), n)
    }
}

// function includesNumber(myArray, myNumber) {
//     if (!myArray.length) {
//       return false;
//     } else if (myArray[0] === myNumber) {
//       return true;
//     } else {
//       return includesNumber(myArray.slice(1), myNumber);
//     }
//   }