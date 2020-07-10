// Code your solution here!

function printString(string){
    console.log(string[0])
    if (string.length > 1){
        printString(string.substring(1))
    } else {
        return true
    }
}

function reverseString(string){
    if(string.length == 0){
        console.log("in if statement")
        debugger
        return string
    }
    console.log(string)
    return reverseString(string.substring(1)) + string[0]
}

function isPalindrome(string){
    if(string.length <= 1){
        return true
    }
    else if(string[0] == string[string.length - 1]){
        return isPalindrome(string.substring(1, string.length - 1))
    }
    else {
        return false
    }
}

function addUpTo(arr, index){
    if(index == 0){
        return arr[index]
    } else {
        return arr[index] + addUpTo(arr, --index)
    }
}

function maxOf(arr){
    if(arr.length == 1){
        return arr[0]
    } else{
        return Math.max(arr.pop(), maxOf(arr))
    } 
}

function includesNumber(arr, num){
    if(arr.length == 0){
        return false
    } else if (arr[0] == num){
        return true
    } else {
        return includesNumber(arr.slice(1), num)
    }
}
