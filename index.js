function printString(string) {
    console.log(string[0])

    if (string.length > 1) {
        let subString = string.slice(1, string.length);
        printString(subString)
    } else {
        return true
    }
}

function reverseString(string) {
    if (string === "") {
        return ""
    } else {
        return reverseString(string.substr(1)) + string.charAt(0)
    }
}

function isPalindrome(string) {
    if (string[0] === string[(string.length - 1)] && string.length > 1) {
        isPalindrome(string.slice(1, (string.length - 1)))
        return true
    } else {
        return false
    }
}

function addUpTo(array, index) {
    if (index > 0) {
        return addUpTo(array, (index-1)) + array[index]
    } else {
        return array[index]
    }
}

function maxOf(array) {
    if (array.length === 1) {
        return array[0]
    } else {
        return Math.max(array.pop(), maxOf(array));
    }
}

function includesNumber(array, number) {
    if (array.length === 1) {
        return false
    } else if (array[0] === number) { 
        return true
    } else {
        return includesNumber(array.slice(1), number)
    }
}