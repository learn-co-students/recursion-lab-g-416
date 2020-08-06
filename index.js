// Code your solution here!

function printString(myString){
    console.log(myString[0]);

    if (myString.length > 1){
        let mySubString = myString.substring(1, myString.length)
        printString(mySubString)
    } else {
        return true;
    }
}

function reverseString(myString){ 
    if (myString < 2){
        return myString
    } else {
        return reverseString(myString.substring(1)) + myString[0]
    }
}

function isPalindrome(string){
    if(string.length === 1 || string.length === 2 && string[0] === string[1]){
        return true
    } else if(string[0] !== string[string.length - 1]) {
        return false
    } else {
        return isPalindrome(string.substring(1, string.length-1))
    }
}

function addUpTo(array, index){
    if (index > 0){
        return array[0] + addUpTo(array.slice(1, array.length), index - 1)
    } else {
        return array[0]
    }
}

function maxOf(array){
    if(array.length > 1){
        if(array[0] < array[1]){
            array.splice(0,1)
            return maxOf(array)
        } else {
            array.splice(1, 1)
            return maxOf(array)
        }
    } else {
        return array[0]
    }
}

function includesNumber(array, num){
    if(array.length > 1){
        if(array[0] === num){
            return true
        } else {
            array.splice(0,1)
            return includesNumber(array, num)
        }
    } else {
        return array[0] === num
    }
}