// Code your solution here!

function printString(strang) {
    console.log(strang[0]);
    if (strang.length > 1) {
        let subby = strang.substring(1, strang.length);
        printString(subby);
    } else {
        return true;
    }
}

function reverseString(string) {
    return string ? reverseString(string.substring(1)) + string[0] : string;
}

function isPalindrome(string) {
    if (string.length > 1) {
        if (string[0] === string[string.length - 1]) {
            let sub = string.substring(1, string.length - 1)
            return isPalindrome(sub)
        } else {
            return false
        }
    }
    return true;
}

function addUpTo(arr, idx) {
    if (idx > 0) {
        return arr[idx] + addUpTo(arr, idx - 1)
    } else {
        return arr[0]
    }
}

function maxOf(arr) {
    if (arr.length > 1) {
        if (arr[0] > arr[arr.length - 1]) {
            arr.pop();
            return maxOf(arr)
        } else {
            arr.shift();
            return maxOf(arr)
        }
    } else {
        return arr[0]
    }
}

function includesNumber(arr, number) {
    if (arr.length > 0) {
        if (arr[0] !== number) {
            return includesNumber(arr.slice(1), number);
        }
        else {
            return true;
        }
    }
    return false;
}