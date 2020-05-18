// Code your solution here!

function printString(string) {
    console.log(string[0])
    if(string.length > 1) {
        let subString = string.substring(1, string.length)
        printString(subString)
    } else {
        return true
    }
}

function reverseString(string) {
    if(string === "") {
        return ""
    } else {
        return reverseString(string.substring(1)) + string.charAt(0)
    }
}

function isPalindrome(string) {
    if(string.length === 1 || string.length === 0) {
        return true
    } else {
        if(string.charAt(0) === string.charAt(string.length - 1)) {
            return isPalindrome(string.substring(1, string.length - 1))
        } else {
            return false
        }
    }
}

function addUpTo(array, index) {
    if(index === 0) {
        return array[0]
    } else {
        let newIndex = index - 1
        return addUpTo(array, newIndex) + array[index]
    }
}

function maxOf(array) {
    if(array.length === 1) {
        return array[0]
    } else {
        let newArray = array.slice(1)
        let num = maxOf(newArray)
        if(num > array[0]) {
            return num
        } else {
            return array[0]
        }
    }
}

function includesNumber(array, num) {
    if(array.length === 0) {
        return false
    } else {
        if(array[0] === num) {
            return true
        } else {
            let newArray = array.slice(1)
            return includesNumber(newArray, num)
        }
    }
}