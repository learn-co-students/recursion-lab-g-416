// Code your solution here!

 function printString(string){
    console.log(string[0])
    if (string.length > 1) {
        let subString = string.slice(1)
        return printString(subString)
    } else {
        return true
    }
}

function reverseString(string){
    if (string === "") {
        return ""
    } else {
        return reverseString(string.substring(1)) + string[0]
    }
}

function isPalindrome(string){
    if (string.length > 1) {
        if (string[0] === string[string.length - 1]) {
            isPalindrome(string.substring(1, string.length - 1))
        } else {
            return false
        }
    }
    return true 
}

function addUpTo(array, index, sum = 0){
    if (index > 0){
        sum += array[index] 
        index = index - 1 
        return addUpTo(array, index, sum)
    } 
    return sum + array[0]
}

function maxOf(array, max = 0){
    if (array.length > 1) {
        if (max < array[array.length - 1]){
            max = array[array.length - 1]
        } 
        array.pop()
        return maxOf(array, max)
    } else if (max < array[array.length -1]){
        max = array[array.length -1]
    }
    return max 
}

function includesNumber(array, number, result = false){
    if (array.length > 1) {
        if (number === array[array.length - 1]){
            result = true 
        }
        array.pop()
        return includesNumber(array, number, result)
    } else if (number === array[array.length - 1]){
        result = true
    }
    return result 
}
