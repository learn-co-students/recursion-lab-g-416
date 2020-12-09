// Code your solution here!

function printString(myString) {
    console.log(myString[0]);

    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
}

function reverseString(string){
    if(string.length > 1){
        return string[string.length - 1] + reverseString(string.slice(0, string.length - 1))
    } else {
        return string
    }  
}

function isPalindrome(str) {
    // while (str.length > 1) {
    //     if (str[0] === str[str.length-1]) {
    //         return isPalindrome(str.slice(1,str.length-1))
    //     } else {
    //         return false
    //     }
    // }
    // return true
    if (str.length <= 1){
        return true
    } else if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, str.length - 1))
    } else {
        return false
    }
}

function addUpTo(arr, index) {
    if (index >0) {
        return arr[index] + addUpTo(arr, index-1)
    } else {
        return arr[index]
    }
}

// function maxOf(arr) {
//     if (arr.length > 1) {
//         return Math.max(arr.pop(), maxOf(arr))
//         // return maxOf(arr)
//     } else {
//         return arr[0]
//     }
// }

// function maxOf(arr) {
//     if(arr.length === 1) {
//         return arr[0]
//     } else {
//         if (arr[0] < arr[1]) {
//             arr.splice(0,1); 
//         } else {
//             arr.splice(1,1); 
//         }
//         return maxOf(arr);
//     }
// }

function maxOf(arr, value = arr[0]) {
    if (arr.length > 1) {
        if (arr[arr.length-1] > value) {
            value = arr[arr.length - 1]
        }
        return maxOf(arr.splice(0,arr.length-1), value)
    } else {
        return value
    }
}

function includesNumber(arr, num) {
    if (arr.length > 0) {
        if (arr[0] === num) {
            return true
        } else {
            return includesNumber(arr.splice(1,arr.length), num)
        }
    } else {
        return false
    }
}

// function includesNumber(array, num){
//     if(array.shift() === num){
//         return true
//     } else {
//         return array.length > 0 ? includesNumber(array, num) : false
//     }
// }

// function includesNumber(arr, element){
//     if (arr[0] === element){
//         return true
//     } else if(arr.length > 1) {
//         return includesNumber(arr.slice(1), element)
//     } else {
//         return false
//     }
// }