// Code your solution here!

// Let's print out all of the characters in the string 'pizza':
function printString(string) {
    let substring
    console.log(string[0])
    if (string.length > 1) {
        substring = string.substring(1, string.length)
        printString(substring)
    } else {
        return true
    }
}
// printString("pizza")

// return a reversed string
function reverseString(string) {
    if (string.length == 1) {
        return string
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}
reverseString('pizza')

function isPalindrome(string) {
    if (string.length === 1) {
        return true
    } else if (string[string.length - 1] === string[0]) {
        return isPalindrome(string.substring(1, string.length - 1))
    } else {
        return false
    }
}

// sums all members up to a given index in an array
function addUpTo(arr, index) {
    // base case and exit
    if (index < 1) return arr[index]
    // change input by recursion
    return arr[index] + addUpTo(arr, index - 1)
}

function maxOf(arr) {
    // base case and exit
    if (arr.length === 1) return arr[0]
    // change input by recursion
    return Math.max(arr.pop(), maxOf(arr))
}

function includesNumber(arr, num) {
    if (!arr.length) return false
    // base case and exit
    if (arr[0] === num) return true
    // change input by recursion
    return includesNumber(arr.slice(1), num)
}