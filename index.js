function printString(myString) {
    console.log(myString[0])

    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length)

        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(str) {
    // return str ? reverseString(str.substr(1)) + str[0] : str;
    // if (str.length > 0) {
    //     return reverseString(str.substr(1)) + str[0]
    // } else {
    //     return str
    // }
    if (str.length > 0) {
        let subString = str.substring(1)
        // or let subString = str.substring(1, str.length - 1)
        return (str[str.length - 1]) + reverseString(subString)
    } else {
        return true
    }
}

function isPalindrome(str) {
    if (str.length > 1 && (str[0] === str[str.length - 1])) {
        return isPalindrome(str.slice(1, str.length - 1))
    } else if (str.length <= 1){
        return true
    } else {
        return false
    }
}

function addUpTo(arr, i){
    if(i > 0) {
        return arr[i] + addUpTo(arr, i-1)
    } else {
        return arr[i]
    }
}

function maxOf(arr){
    if(arr.length === 1) {
        return arr[0]
    } else {
        if (arr[0] < arr[1]) { arr.splice(0,1); }
        else { arr.splice(1,1); }
            return maxOf(arr);
    }
}

function includesNumber(arr, element){
    if (arr[0] === element){
        return true
    } else if(arr.length > 1) {
        return includesNumber(arr.slice(1), element)
    } else {
        return false
    }
}

