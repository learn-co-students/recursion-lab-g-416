// Code your solution here!

 function printString(str) {
     console.log(str[0])
    if (str.length > 1) {
        let subString = str.substring(1, str.length)
        printString(subString)
    } else {
        return true
    }
}

function reverseString(str) {

    if (str.length > 1) {
        let subString = str.substring(0, str.length - 1)
        return str[str.length -1] + reverseString(subString)
    } else {
        return str[0]
    }
}

function isPalindrome(str) {
    if (str.length <= 1) {
        return true
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.substring(1, str.length - 1))
    } else {
        return false
    }
}

function addUpTo(arr, idx) {

    if (idx < 0) {
        return 0
    }

    return arr[idx] + addUpTo(arr, idx - 1)
}

function maxOf(arr) {
	if (arr.length === 1) {
		return	arr[0];
	}
	var f = arr[0];
	var l = arr[arr.length - 1];
	return maxOf(f < l ? arr.slice(1) : arr.slice(0, -1));
}

function includesNumber(arr, num) {
    if(!arr.length) {
        return false
    } else if (arr[0] === num) {
        return true
    } else {
        return includesNumber(arr.slice(1), num)
    }
}