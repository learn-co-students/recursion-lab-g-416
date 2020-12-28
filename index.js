// Code your solution here!

function printString(text) {
    console.log(text[0])

    if (text.length > 1) {
        let mySubString = text.slice(1, text.length)
        printString(mySubString)
    } else {
        return true
    }
}

function reverseString(text) {
    //console.log(text.slice(0, text.length - 1))
    if (text.length > 0) {
        let subString = text.slice(0, text.length - 1) || ""
        return text.slice(text.length - 1) + reverseString(subString)
    } else {
        return ""
    }
    
}

function isPalindrome(text) {
    if (text.length > 0) {
        
        let subString = text.slice(1, text.length - 1)
        //console.log(subString)
        if (text.length === 1) {
            return true
            
        } else if (text[0] === text[text.length - 1]) {
            return isPalindrome(subString)
        } else {
            return false
        }
    }
}

function addUpTo(array, index) {
    //console.log(array)
    let arrayCopy;
    //debugger
    if (index !== undefined) {
        arrayCopy = array.slice(0, index + 1)
    }
    
    if (array.length === 1) {
        return array[0];
    } else if (arrayCopy !== undefined) {
        
        return array[0] + addUpTo(arrayCopy.slice(1, arrayCopy.length))
    } else {
        return array[0] + addUpTo(array.slice(1, array.length))
    }
}

function maxOf(nums, currentMax) {
    //debugger
    if (nums.length === 1) {
        return nums[0] > currentMax ? nums[0] : currentMax
    } else {
        if (currentMax !== undefined) {
            return maxOf(nums.slice(1, nums.length), nums[0] > currentMax ? nums[0] : currentMax)
        } else {
            return maxOf(nums.slice(1, nums.length), nums[0])
        }
        
    }
}

function includesNumber(array, target) {
    if (array.length === 1) {
        return array[0] === target
    } else {
        if (array[0] === target) {
            return true
        } else {
            return includesNumber(array.slice(1, array.length), target)
        }
    }
}