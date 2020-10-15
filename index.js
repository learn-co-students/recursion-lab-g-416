// Code your solution here!

// Code your solution here!

printString = (string) => {
    console.log(string[0])
    if (string.length > 1) {
        printString(string.slice(1, string.length + 1))
    } else {
        return true
    }
}

function reverseString(string) {
    if (string.length > 0) {
        // console.log(`string is ${string}`)
        return reverseString(string.slice(1, string.length)) + string[0]
    } else {
        return string
    }
}


function isPalindrome(string) {
    if (string.length > 1) {
        if (string[0] === string[string.length-1]) {
            // console.log(`string is ${string}`);
            return isPalindrome(string.slice(1, string.length-1))
        } else {
            return false
        }
    }
    return true
}

function addUpTo(array, index) {
    // array[0] + array[0+1] ... + array[index]
    if (index > 0) {
        return addUpTo(array, index-1) + array[index]
    } else {
        return array[0]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        // console.log(`array is ${array}`)
        if (array[0] > array[array.length-1]) {
            array.pop();
            return maxOf(array);
        } else {
            array.shift();
            return maxOf(array);
        }
    } else {
        // console.log(`array 0 is ${array[0]}`)
        return array[0]
    }
}

function includesNumber(array, number) {
    if (array.length > 1) {
        if (array[0] === number) {
            return true
        } else {
            return includesNumber(array.slice(1, array.length), number)
        } 
    }else {
    return false
    }
}